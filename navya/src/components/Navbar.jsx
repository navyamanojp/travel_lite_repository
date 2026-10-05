import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Sun, MapPin, Sparkles, PieChart, BookmarkCheck, Menu, X, CloudSun } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/', icon: Compass },
    { label: 'Explore', path: '/explore', icon: MapPin },
    { label: 'Weather', path: '/weather', icon: CloudSun },
    { label: 'Plan a Trip', path: '/plan', icon: Sparkles },
    { label: 'Budget', path: '/budget', icon: PieChart },
    { label: 'My Trips', path: '/my-trips', icon: BookmarkCheck }
  ];

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={() => setMobileOpen(false)}>
          <div className="brand-icon-wrapper">
            <Compass className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Travel<span className="brand-highlight">Lite</span></span>
            <span className="brand-sub">Smart Kerala Planner</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Quick CTA */}
        <div className="navbar-actions">
          <Link to="/plan" className="btn btn-primary btn-sm nav-cta">
            <Sparkles size={16} />
            <span>Plan Trip</span>
          </Link>
          
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer animate-fade-in">
          <nav className="mobile-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                  end={item.path === '/'}
                >
                  <div className="mobile-nav-icon-bg">
                    <Icon size={18} />
                  </div>
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
