import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Mail, Phone, Heart, Sparkles, Shield, Compass as CompassIcon } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-icon-bg">
                <Compass size={24} />
              </div>
              <span className="footer-brand-title">Travel<span>Lite</span></span>
            </Link>
            <p className="footer-bio">
              Your smart, lightweight travel companion for discovering the beauty of God's Own Country. Plan itineraries, track weather, and budget with ease.
            </p>
            <div className="footer-badge">
              <Sparkles size={14} />
              <span>100% Offline Capable & Free</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/explore">Explore Kerala</Link></li>
              <li><Link to="/weather">Live Weather Radar</Link></li>
              <li><Link to="/plan">Smart Trip Planner</Link></li>
              <li><Link to="/budget">Budget Calculator</Link></li>
              <li><Link to="/my-trips">Saved Itineraries</Link></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div className="footer-col">
            <h4 className="footer-heading">Popular Destinations</h4>
            <ul className="footer-links">
              <li><Link to="/explore?search=Munnar">Munnar Tea Hills</Link></li>
              <li><Link to="/explore?search=Alleppey">Alleppey Backwaters</Link></li>
              <li><Link to="/explore?search=Varkala">Varkala Cliffs</Link></li>
              <li><Link to="/explore?search=Wayanad">Wayanad Wilds</Link></li>
              <li><Link to="/explore?search=Kochi">Fort Kochi Heritage</Link></li>
            </ul>
          </div>

          {/* Contact & Tech */}
          <div className="footer-col">
            <h4 className="footer-heading">Built For Travelers</h4>
            <p className="footer-info-text">
              Powered by Open-Meteo Weather API & Local Storage persistence. Designed with React, Recharts & Modern CSS.
            </p>
            <div className="footer-tech-pills">
              <span>React 18</span>
              <span>Open-Meteo</span>
              <span>Recharts</span>
              <span>Vite</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TravelLite – Smart Travel Planner. Crafting memorable Kerala journeys.</p>
          <div className="footer-bottom-links">
            <Link to="/explore">All Destinations</Link>
            <span>•</span>
            <Link to="/plan">Generate Itinerary</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
