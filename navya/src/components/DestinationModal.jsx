import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Calendar, Clock, IndianRupee, Sparkles, CloudSun, CheckCircle2, Compass } from 'lucide-react';
import './DestinationModal.css';

export default function DestinationModal({ destination, onClose }) {
  const navigate = useNavigate();

  if (!destination) return null;

  const handlePlanNow = () => {
    onClose();
    navigate(`/plan?destination=${destination.id}`);
  };

  const handleWeatherCheck = () => {
    onClose();
    navigate(`/weather?destination=${destination.id}`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header Banner */}
        <div className="modal-header-banner">
          <img src={destination.image} alt={destination.name} className="modal-banner-img" />
          <div className="modal-banner-overlay">
            <div className="modal-badges">
              <span className="badge badge-forest">{destination.category}</span>
              <span className="badge badge-amber">{destination.elevation}</span>
            </div>
            <h2 className="modal-title">{destination.name}</h2>
            <p className="modal-subtitle">{destination.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Quick Stats Grid */}
          <div className="modal-stats-grid">
            <div className="modal-stat-card">
              <Calendar className="stat-icon" size={20} />
              <div>
                <span className="stat-label">Best Time to Visit</span>
                <span className="stat-value">{destination.bestTimeToVisit}</span>
              </div>
            </div>

            <div className="modal-stat-card">
              <Clock className="stat-icon" size={20} />
              <div>
                <span className="stat-label">Ideal Stay Duration</span>
                <span className="stat-value">{destination.idealDays} Days</span>
              </div>
            </div>

            <div className="modal-stat-card">
              <IndianRupee className="stat-icon" size={20} />
              <div>
                <span className="stat-label">Avg Daily Budget</span>
                <span className="stat-value">₹{destination.avgDailyCostPerPerson} / person</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">About {destination.name}</h3>
            <p className="modal-text">{destination.description}</p>
          </div>

          {/* Attractions List */}
          <div className="modal-section">
            <h3 className="modal-section-title">Top Attractions & Experiences</h3>
            <div className="modal-attractions-grid">
              {destination.attractions.map((att) => (
                <div key={att.id} className="attraction-card">
                  <img src={att.image} alt={att.name} className="attraction-img" />
                  <div className="attraction-info">
                    <div className="attraction-header">
                      <h4>{att.name}</h4>
                      <span className="attraction-cost">
                        {att.cost === 0 ? 'Free' : `₹${att.cost}`}
                      </span>
                    </div>
                    <p className="attraction-desc">{att.description}</p>
                    <div className="attraction-meta">
                      <span><Clock size={12} /> {att.duration}</span>
                      <span><Compass size={12} /> {att.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="modal-actions">
            <button className="btn btn-secondary" onClick={handleWeatherCheck}>
              <CloudSun size={18} />
              <span>Check Live Weather</span>
            </button>
            <button className="btn btn-primary" onClick={handlePlanNow}>
              <Sparkles size={18} />
              <span>Generate Trip Itinerary</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
