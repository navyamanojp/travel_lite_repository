import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';
import WeatherWidget from '../components/WeatherWidget';
import { fetchDestinationWeather } from '../utils/weatherApi';
import { 
  CloudSun, MapPin, Wind, Droplets, Compass, Thermometer, 
  Sparkles, RefreshCw, Sun, Info, Calendar 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import './WeatherPage.css';

export default function WeatherPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const destParam = searchParams.get('destination') || 'munnar';
  const currentDest = DESTINATIONS.find(d => d.id === destParam) || DESTINATIONS[0];

  const [hourlyData, setHourlyData] = useState([]);
  const [loadingHourly, setLoadingHourly] = useState(true);

  useEffect(() => {
    async function loadHourlyData() {
      setLoadingHourly(true);
      const res = await fetchDestinationWeather(currentDest.coordinates.lat, currentDest.coordinates.lon);
      if (res.success && res.hourly) {
        setHourlyData(res.hourly);
      } else {
        setHourlyData([]);
      }
      setLoadingHourly(false);
    }
    loadHourlyData();
  }, [currentDest]);

  const handleDestChange = (destId) => {
    setSearchParams({ destination: destId });
  };

  return (
    <div className="weather-page container section-padding animate-fade-in">
      {/* Page Header */}
      <div className="weather-header-section text-center">
        <span className="section-tag">
          <CloudSun size={14} /> Open-Meteo Live Radar
        </span>
        <h1 className="section-title">Kerala Live Weather & Forecast</h1>
        <p className="section-subtitle mx-auto">
          Get real-time temperature, wind speed, relative humidity, and 7-day meteorological forecasts for your travel destination.
        </p>
      </div>

      {/* Destination Selector Tabs */}
      <div className="dest-tabs-container card-base">
        <span className="tabs-label">Select Destination:</span>
        <div className="dest-tabs">
          {DESTINATIONS.map((d) => (
            <button
              key={d.id}
              className={`dest-tab-btn ${currentDest.id === d.id ? 'active' : ''}`}
              onClick={() => handleDestChange(d.id)}
            >
              <MapPin size={14} />
              <span>{d.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Weather Widget */}
      <div className="weather-main-grid">
        <div className="weather-widget-col">
          <WeatherWidget destination={currentDest} compact={false} />
        </div>

        {/* Temperature Trend Chart */}
        <div className="weather-chart-col card-base">
          <div className="chart-header">
            <h3 className="chart-title">
              <Thermometer size={18} /> 12-Hour Temperature Trend (°C)
            </h3>
            <span className="chart-subtitle">Hourly forecast for {currentDest.name}</span>
          </div>

          {loadingHourly ? (
            <div className="chart-loader">
              <RefreshCw className="spin-icon" size={24} />
              <p>Loading hourly forecast data...</p>
            </div>
          ) : hourlyData.length > 0 ? (
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={hourlyData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(11, 51, 39, 0.08)" />
                  <XAxis dataKey="time" stroke="#4B5563" fontSize={12} />
                  <YAxis stroke="#4B5563" fontSize={12} domain={['dataMin - 2', 'dataMax + 2']} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0B3327', 
                      borderRadius: '10px', 
                      color: '#FFF',
                      border: 'none',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }}
                    formatter={(val) => [`${val}°C`, 'Temperature']}
                  />
                  <Area type="monotone" dataKey="temp" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#tempGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="no-chart-text">Hourly forecast data unavailable.</p>
          )}

          {/* Travel Weather Advisory */}
          <div className="weather-advisory-box">
            <Info size={18} className="advisory-icon" />
            <div>
              <span className="advisory-title">Travel Advisory for {currentDest.name}</span>
              <p className="advisory-text">
                {currentDest.category === 'Hill Station'
                  ? 'Misty mornings and cooler temperatures in hill stations. Carry light woolens or a jacket for morning & evening treks.'
                  : currentDest.category === 'Backwaters'
                  ? 'Pleasant sea and backwater breezes. Keep light cotton clothing, sunscreen, and hydration ready for cruises.'
                  : 'Warm sunny weather by the coast. Perfect for sunset walks, water sports, and seaside dining.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Trip Quick CTA */}
      <div className="weather-plan-cta card-base">
        <div>
          <h3>Plan a Trip around {currentDest.name}'s Weather</h3>
          <p>Generate a customized day-by-day itinerary tailored for {currentDest.name}.</p>
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => navigate(`/plan?destination=${currentDest.id}`)}
        >
          <Sparkles size={18} />
          <span>Plan Trip to {currentDest.name}</span>
        </button>
      </div>
    </div>
  );
}
