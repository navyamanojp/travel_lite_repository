import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee, Sparkles, ArrowRight, Eye, Sun } from 'lucide-react';
import './DestinationCard.css';

export default function DestinationCard({ destination, onSelect }) {
  const navigate = useNavigate();

  const handlePlanClick = (e) => {
    e.stopPropagation();
    navigate(`/plan?destination=${destination.id}`);
  };

  return (
    <div className="dest-card card-base" onClick={() => onSelect(destination)}>
      <div className="dest-card-image-wrapper">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="dest-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="dest-card-overlay">
          <span className="badge badge-forest dest-category-badge">{destination.category}</span>
          <span className="badge badge-amber dest-days-badge">
            <Calendar size={12} /> {destination.idealDays} Days
          </span>
        </div>
      </div>

      <div className="dest-card-content">
        <div className="dest-header">
          <h3 className="dest-title">{destination.name}</h3>
          <span className="dest-cost">
            <IndianRupee size={14} />{destination.avgDailyCostPerPerson}/day
          </span>
        </div>

        <p className="dest-tagline">{destination.tagline}</p>

        <p className="dest-description">
          {destination.description.length > 110 
            ? `${destination.description.substring(0, 110)}...` 
            : destination.description}
        </p>

        {/* Highlights tags */}
        <div className="dest-highlights">
          {destination.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="highlight-pill">• {h}</span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="dest-card-actions">
          <button 
            className="btn btn-secondary btn-sm dest-view-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(destination);
            }}
          >
            <Eye size={15} />
            <span>Details</span>
          </button>

          <button 
            className="btn btn-primary btn-sm dest-plan-btn"
            onClick={handlePlanClick}
          >
            <Sparkles size={15} />
            <span>Plan Trip</span>
          </button>
        </div>
      </div>
    </div>
  );
}
