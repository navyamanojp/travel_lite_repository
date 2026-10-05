// Weather API helper using HTTPS Open-Meteo API
export const getWeatherCodeInfo = (code) => {
  const c = Number(code);
  if (c === 0) return { label: 'Clear Sky', icon: '☀️', condition: 'Sunny' };
  if (c === 1 || c === 2) return { label: 'Partly Cloudy', icon: '🌤️', condition: 'Partly Cloudy' };
  if (c === 3) return { label: 'Overcast', icon: '☁️', condition: 'Cloudy' };
  if (c === 45 || c === 48) return { label: 'Misty / Fog', icon: '🌫️', condition: 'Foggy' };
  if (c >= 51 && c <= 57) return { label: 'Light Drizzle', icon: '🌧️', condition: 'Drizzle' };
  if (c >= 61 && c <= 67) return { label: 'Rainy', icon: '🌧️', condition: 'Rain' };
  if (c >= 80 && c <= 82) return { label: 'Rain Showers', icon: '🌦️', condition: 'Showers' };
  if (c >= 95) return { label: 'Thunderstorm', icon: '🌩️', condition: 'Thunderstorm' };
  return { label: 'Mild Weather', icon: '🌤️', condition: 'Pleasant' };
};

export const fetchDestinationWeather = async (latitude, longitude) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
    
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Weather service returned status ${res.status}`);
    }
    
    const data = await res.json();
    const current = data.current_weather || {};
    const codeInfo = getWeatherCodeInfo(current.weathercode);
    
    // Process 7-day forecast
    const dailyForecast = [];
    if (data.daily && data.daily.time) {
      for (let i = 0; i < Math.min(data.daily.time.length, 7); i++) {
        const dateStr = data.daily.time[i];
        const dateObj = new Date(dateStr);
        const dayName = i === 0 ? 'Today' : dateObj.toLocaleDateString('en-US', { weekday: 'short' });
        const code = data.daily.weather_code ? data.daily.weather_code[i] : 0;
        const info = getWeatherCodeInfo(code);
        
        dailyForecast.push({
          date: dateStr,
          dayName,
          maxTemp: Math.round(data.daily.temperature_2m_max[i]),
          minTemp: Math.round(data.daily.temperature_2m_min[i]),
          precipitation: data.daily.precipitation_sum ? data.daily.precipitation_sum[i] : 0,
          weatherCode: code,
          label: info.label,
          icon: info.icon
        });
      }
    }

    // Process hourly forecast (next 12 hours)
    const hourlyForecast = [];
    if (data.hourly && data.hourly.time) {
      const currentHourIndex = new Date().getHours();
      for (let i = currentHourIndex; i < Math.min(currentHourIndex + 12, data.hourly.time.length); i++) {
        const timeStr = data.hourly.time[i];
        const hourTime = new Date(timeStr).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
        hourlyForecast.push({
          time: hourTime,
          temp: Math.round(data.hourly.temperature_2m[i]),
          humidity: data.hourly.relative_humidity_2m ? data.hourly.relative_humidity_2m[i] : 70,
          precipProb: data.hourly.precipitation_probability ? data.hourly.precipitation_probability[i] : 0
        });
      }
    }

    // Get current humidity from hourly if available
    const currentHumidity = data.hourly && data.hourly.relative_humidity_2m 
      ? data.hourly.relative_humidity_2m[0] 
      : 72;

    return {
      success: true,
      current: {
        temp: Math.round(current.temperature || 24),
        windSpeed: current.windspeed || 8,
        windDirection: current.winddirection || 180,
        weatherCode: current.weathercode,
        label: codeInfo.label,
        icon: codeInfo.icon,
        condition: codeInfo.condition,
        humidity: currentHumidity,
        time: current.time
      },
      daily: dailyForecast,
      hourly: hourlyForecast
    };
  } catch (err) {
    console.error('Error fetching weather data:', err);
    return {
      success: false,
      error: err.message || 'Failed to fetch live weather data'
    };
  }
};
