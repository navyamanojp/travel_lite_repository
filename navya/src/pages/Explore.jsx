import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DESTINATIONS, CATEGORIES } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import DestinationModal from '../components/DestinationModal';
import { Search, Filter, SlidersHorizontal, MapPin, Compass, RotateCcw, Frown } from 'lucide-react';
import './Explore.css';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'costAsc', 'costDesc', 'daysAsc'
  const [selectedDest, setSelectedDest] = useState(null);

  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  // Filter and Sort Logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      // Category filter
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) {
        return false;
      }
      // Search term matching name, tagline, description, or highlights
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = dest.name.toLowerCase().includes(query);
        const matchesCategory = dest.category.toLowerCase().includes(query);
        const matchesTagline = dest.tagline.toLowerCase().includes(query);
        const matchesHighlights = dest.highlights.some(h => h.toLowerCase().includes(query));
        
        return matchesName || matchesCategory || matchesTagline || matchesHighlights;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'costAsc') return a.avgDailyCostPerPerson - b.avgDailyCostPerPerson;
      if (sortBy === 'costDesc') return b.avgDailyCostPerPerson - a.avgDailyCostPerPerson;
      if (sortBy === 'daysAsc') return a.idealDays - b.idealDays;
      return 0; // default order
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('recommended');
    setSearchParams({});
  };

  return (
    <div className="explore-page container section-padding animate-fade-in">
      {/* Header */}
      <div className="explore-header text-center">
        <span className="section-tag">
          <Compass size={14} /> Kerala Destination Directory
        </span>
        <h1 className="section-title">Explore God's Own Country</h1>
        <p className="section-subtitle mx-auto">
          Filter through pristine hill stations, tranquil backwaters, heritage ports, and wildlife reserves to find your ideal getaway.
        </p>
      </div>

      {/* Control Bar: Search & Category Pills & Sorting */}
      <div className="explore-controls card-base">
        {/* Search Input */}
        <div className="explore-search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search destination, tea gardens, backwaters, beach..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="explore-search-input"
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
              ×
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="category-pills-container">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Reset */}
        <div className="explore-sort-wrapper">
          <div className="sort-select-box">
            <SlidersHorizontal size={16} />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="recommended">Sort by: Recommended</option>
              <option value="costAsc">Budget: Low to High</option>
              <option value="costDesc">Budget: High to Low</option>
              <option value="daysAsc">Ideal Days: Shortest First</option>
            </select>
          </div>

          {(searchTerm || selectedCategory !== 'All' || sortBy !== 'recommended') && (
            <button className="btn btn-secondary btn-sm reset-btn" onClick={handleResetFilters}>
              <RotateCcw size={14} /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Results Status Bar */}
      <div className="results-status">
        <p>
          Showing <strong>{filteredDestinations.length}</strong> of <strong>{DESTINATIONS.length}</strong> Kerala destinations
        </p>
      </div>

      {/* Grid List */}
      {filteredDestinations.length > 0 ? (
        <div className="destinations-grid">
          {filteredDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={(d) => setSelectedDest(d)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-results card-base">
          <Frown size={48} className="empty-icon" />
          <h3>No Destinations Found</h3>
          <p>We couldn't find any destination matching "{searchTerm}". Try changing your search query or filter options.</p>
          <button className="btn btn-primary btn-sm mt-3" onClick={handleResetFilters}>
            View All Destinations
          </button>
        </div>
      )}

      {/* Modal View */}
      {selectedDest && (
        <DestinationModal
          destination={selectedDest}
          onClose={() => setSelectedDest(null)}
        />
      )}
    </div>
  );
}
