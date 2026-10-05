import React, { useState, useEffect } from 'react';
import { fetchDestinationWeather } from '../utils/weatherApi';
import { Wind, Droplets, CloudRain, RefreshCw, AlertCircle, Sun, Calendar } from 'lucide-react';
import './WeatherWidget.css';

export default function WeatherWidget({ destination, compact = false }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadWeather = async () => {
    if (!destination || !destination.coordinates) return;
    setLoading(true);
    setError(null);

    const result = await fetchDestinationWeather(
      destination.coordinates.lat,
      destination.coordinates.lon
    );

    if (result.success) {
      setWeather(result);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadWeather();
  }, [destination]);

  if (loading) {
    return (
      <div className={`weather-widget card-base ${compact ? 'compact' : ''} loading-state`}>
        <RefreshCw className="spin-icon" size={24} />
        <p>Fetching real-time weather from Open-Meteo for {destination?.name}...</p>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className={`weather-widget card-base ${compact ? 'compact' : ''} error-state`}>
        <AlertCircle size={24} />
        <p>{error || 'Unable to load weather data.'}</p>
        <button className="btn btn-secondary btn-sm" onClick={loadWeather}>
          <RefreshCw size={14} /> Retry
        </button>
      </div>
    );
  }

  const { current, daily } = weather;

  if (compact) {
    return (
      <div className="weather-widget compact card-base">
        <div className="weather-compact-content">
          <span className="weather-icon-large">{current.icon}</span>
          <div>
            <div className="weather-temp-bold">{current.temp}°C</div>
            <div className="weather-label-sm">{current.label}</div>
          </div>
        </div>
        <div className="weather-compact-meta">
          <span><Droplets size={12} /> {current.humidity}%</span>
          <span><Wind size={12} /> {current.windSpeed} km/h</span>
        </div>
      </div>
    );
  }

  return (
    <div className="weather-widget full card-base animate-fade-in">
      <div className="weather-header">
        <div>
          <span className="badge badge-sky">Live Open-Meteo Radar</span>
          <h3 className="weather-dest-name">{destination.name} Weather</h3>
          <p className="weather-coords">
            Lat: {destination.coordinates.lat}° | Lon: {destination.coordinates.lon}°
          </p>
        </div>

        <button className="btn-icon-refresh" onClick={loadWeather} title="Refresh Weather">
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Hero Temperature Card */}
      <div className="weather-hero-card">
        <div className="weather-hero-left">
          <span className="weather-hero-icon">{current.icon}</span>
          <div>
            <div className="weather-hero-temp">{current.temp}<span>°C</span></div>
            <div className="weather-hero-condition">{current.label}</div>
          </div>
        </div>

        <div className="weather-hero-details">
          <div className="weather-detail-item">
            <Droplets size={18} className="detail-icon" />
            <div>
              <span className="detail-label">Humidity</span>
              <span className="detail-val">{current.humidity}%</span>
            </div>
          </div>

          <div className="weather-detail-item">
            <Wind size={18} className="detail-icon" />
            <div>
              <span className="detail-label">Wind Speed</span>
              <span className="detail-val">{current.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast Grid */}
      <div className="forecast-section">
        <h4 className="forecast-title">
          <Calendar size={16} /> 7-Day Forecast
        </h4>
        <div className="forecast-grid">
          {daily.map((day, idx) => (
            <div key={idx} className={`forecast-day-card ${idx === 0 ? 'today' : ''}`}>
              <span className="forecast-day-name">{day.dayName}</span>
              <span className="forecast-day-icon">{day.icon}</span>
              <div className="forecast-temps">
                <span className="max-temp">{day.maxTemp}°</span>
                <span className="min-temp">{day.minTemp}°</span>
              </div>
              <span className="forecast-day-label">{day.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
