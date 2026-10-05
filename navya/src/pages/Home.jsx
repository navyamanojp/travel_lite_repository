import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import DestinationModal from '../components/DestinationModal';
import { 
  Search, Sparkles, MapPin, CloudSun, PieChart, ShieldCheck, 
  ArrowRight, Compass, Heart, Users, Award, CheckCircle2 
} from 'lucide-react';
import './Home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDest, setSelectedDest] = useState(null);
  const navigate = useNavigate();

  const featuredDestinations = DESTINATIONS.slice(0, 6);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-backdrop-img"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Smart Kerala Travel Companion</span>
          </div>

          <h1 className="hero-title serif-title">
            Discover the Magic of <br />
            <span className="hero-highlight">God's Own Country</span>
          </h1>

          <p className="hero-subtitle">
            Tailor-made itineraries, live Open-Meteo weather forecasts, and dynamic budget calculations for unforgettable Kerala journeys.
          </p>

          {/* Quick Search Bar */}
          <form className="hero-search-box" onSubmit={handleSearchSubmit}>
            <div className="search-input-wrapper">
              <MapPin size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Where do you want to go in Kerala? (e.g. Munnar, Alleppey)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="hero-search-input"
              />
            </div>
            <button type="submit" className="btn btn-primary hero-search-btn">
              <Search size={18} />
              <span>Explore Destinations</span>
            </button>
          </form>

          {/* Popular Tag Pills */}
          <div className="hero-tags">
            <span className="hero-tags-label">Popular Searches:</span>
            {['Munnar', 'Alleppey', 'Varkala', 'Wayanad', 'Kochi'].map((tag) => (
              <button
                key={tag}
                className="hero-tag-pill"
                onClick={() => navigate(`/explore?search=${tag}`)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Banner */}
      <section className="features-strip">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box forest">
                <Sparkles size={24} />
              </div>
              <div>
                <h4>Smart AI Itinerary</h4>
                <p>Personalized day-by-day plans tailored to your time & interests.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box sky">
                <CloudSun size={24} />
              </div>
              <div>
                <h4>Live Open-Meteo Weather</h4>
                <p>Real-time forecasts and 7-day radar to pack right.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box amber">
                <PieChart size={24} />
              </div>
              <div>
                <h4>Budget Analytics</h4>
                <p>Dynamic cost charts & per-person expense breakdowns.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box teal">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4>100% Offline Save</h4>
                <p>Save itineraries directly into localStorage for zero network loss.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Showcase */}
      <section className="section-padding container">
        <div className="section-header">
          <div>
            <span className="section-tag">
              <Compass size={14} /> Curated Hotspots
            </span>
            <h2 className="section-title">Explore Kerala's Top Destinations</h2>
            <p className="section-subtitle">
              From misty tea plantations in Munnar to golden beach cliffs in Varkala and serene backwaters in Alleppey.
            </p>
          </div>
          <Link to="/explore" className="btn btn-secondary">
            <span>View All ({DESTINATIONS.length})</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="destinations-grid">
          {featuredDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={(d) => setSelectedDest(d)}
            />
          ))}
        </div>
      </section>

      {/* Travel Plan CTA Banner */}
      <section className="cta-banner-section container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="badge badge-amber mb-2">Smart Recommendation Engine</span>
            <h2 className="cta-title">Ready to Plan Your Custom Trip?</h2>
            <p className="cta-desc">
              Select your travel dates, preferred pace, and interests (Nature, Food, Adventure) to generate an instant day-wise itinerary complete with cost estimates.
            </p>
            <div className="cta-buttons">
              <Link to="/plan" className="btn btn-amber btn-lg">
                <Sparkles size={20} />
                <span>Plan My Itinerary Now</span>
              </Link>
              <Link to="/budget" className="btn btn-outline-white btn-lg">
                <PieChart size={20} />
                <span>Calculate Trip Budget</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Detail Modal */}
      {selectedDest && (
        <DestinationModal
          destination={selectedDest}
          onClose={() => setSelectedDest(null)}
        />
      )}
    </div>
  );
}
