import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getSavedTrips, deleteTrip, updateTripNotes } from '../utils/storage';
import { 
  BookmarkCheck, Calendar, Users, IndianRupee, Trash2, Edit3, 
  ChevronDown, ChevronUp, Printer, Sparkles, Search, Compass, Save, CheckCircle2 
} from 'lucide-react';
import './MyTripsPage.css';

export default function MyTripsPage() {
  const [trips, setTrips] = useState([]);
  const [expandedTripId, setExpandedTripId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingNotes, setEditingNotes] = useState({}); // { [tripId]: string }
  const [savedNoteMsg, setSavedNoteMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = () => {
    const data = getSavedTrips();
    setTrips(data);
    if (data.length > 0 && !expandedTripId) {
      setExpandedTripId(data[0].id);
    }
  };

  const handleDelete = (tripId, destName) => {
    if (window.confirm(`Are you sure you want to delete your trip to ${destName}?`)) {
      deleteTrip(tripId);
      loadTrips();
    }
  };

  const handleToggleExpand = (tripId) => {
    setExpandedTripId(prev => (prev === tripId ? null : tripId));
  };

  const handleSaveNotes = (tripId) => {
    const notesText = editingNotes[tripId] ?? '';
    updateTripNotes(tripId, notesText);
    loadTrips();
    setSavedNoteMsg(`Notes updated for trip`);
    setTimeout(() => setSavedNoteMsg(''), 3000);
  };

  const filteredTrips = trips.filter(t => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return t.destinationName.toLowerCase().includes(q) || (t.notes && t.notes.toLowerCase().includes(q));
  });

  return (
    <div className="my-trips-page container section-padding animate-fade-in">
      {/* Header */}
      <div className="page-header text-center">
        <span className="section-tag">
          <BookmarkCheck size={14} /> Saved Journeys
        </span>
        <h1 className="section-title">My Saved Kerala Trips</h1>
        <p className="section-subtitle mx-auto">
          Access your saved itineraries, custom travel notes, and budget summaries. Data persists safely on your device.
        </p>
      </div>

      {/* Top Controls */}
      {trips.length > 0 && (
        <div className="trips-controls-bar card-base">
          <div className="trips-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search saved trips by destination or notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="trips-search-input"
            />
          </div>

          <Link to="/plan" className="btn btn-primary btn-sm">
            <Sparkles size={16} /> Plan New Trip
          </Link>
        </div>
      )}

      {savedNoteMsg && (
        <div className="note-alert card-base animate-fade-in">
          <CheckCircle2 size={16} /> {savedNoteMsg}
        </div>
      )}

      {/* Saved Trips List */}
      {filteredTrips.length > 0 ? (
        <div className="trips-list">
          {filteredTrips.map((trip) => {
            const isExpanded = expandedTripId === trip.id;
            const formattedDate = new Date(trip.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });

            return (
              <div key={trip.id} className="saved-trip-card card-base">
                {/* Main Card Header */}
                <div className="saved-trip-main" onClick={() => handleToggleExpand(trip.id)}>
                  <img src={trip.destinationImage} alt={trip.destinationName} className="trip-cover-img" />

                  <div className="trip-main-info">
                    <div className="trip-badge-row">
                      <span className="badge badge-forest">{trip.days} Days Itinerary</span>
                      <span className="trip-date-text">Saved on {formattedDate}</span>
                    </div>

                    <h2 className="trip-dest-name">{trip.destinationName} Trip</h2>
                    <p className="trip-tagline">{trip.tagline}</p>

                    <div className="trip-meta-row">
                      <span><Users size={14} /> {trip.travelers} Travelers</span>
                      <span><Calendar size={14} /> {trip.days} Days</span>
                      <span className="meta-cost">
                        <IndianRupee size={14} /> ₹{trip.costSummary.grandTotalTrip.toLocaleString('en-IN')} Total
                      </span>
                    </div>
                  </div>

                  <div className="trip-actions-right">
                    <button 
                      className="btn-icon-danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(trip.id, trip.destinationName);
                      }}
                      title="Delete Trip"
                    >
                      <Trash2 size={18} />
                    </button>

                    <button className="expand-toggle-btn">
                      {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Day-Wise Timeline & Notes */}
                {isExpanded && (
                  <div className="saved-trip-details animate-fade-in">
                    <div className="details-header-toolbar">
                      <h3>Day-by-Day Detailed Itinerary</h3>
                      <button className="btn btn-secondary btn-sm" onClick={() => window.print()}>
                        <Printer size={14} /> Print Summary
                      </button>
                    </div>

                    {/* Timeline List */}
                    <div className="saved-days-timeline">
                      {trip.daysItinerary.map((day) => (
                        <div key={day.dayNumber} className="saved-day-box">
                          <div className="saved-day-title">
                            <span className="day-pill">Day {day.dayNumber}</span>
                            <h4>{day.theme}</h4>
                          </div>

                          <div className="saved-activities-grid">
                            {day.activities.map((act, i) => (
                              <div key={i} className="saved-activity-item">
                                <span className="act-slot-label">{act.slot}</span>
                                <h5 className="act-name">{act.title}</h5>
                                <p className="act-desc">{act.description}</p>
                                <span className="act-cost-pill">
                                  {act.costPerPerson === 0 ? 'Free Entry' : `₹${act.costPerPerson}/person`}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Personal Notes & Packing Checklist */}
                    <div className="trip-notes-section">
                      <h4>
                        <Edit3 size={16} /> Personal Trip Notes & Checklist
                      </h4>
                      <textarea
                        rows="3"
                        placeholder="Add hotel confirmation numbers, packing lists, or special travel notes here..."
                        value={editingNotes[trip.id] ?? trip.notes ?? ''}
                        onChange={(e) => setEditingNotes({ ...editingNotes, [trip.id]: e.target.value })}
                        className="trip-notes-input"
                      ></textarea>
                      <div className="notes-actions">
                        <button className="btn btn-primary btn-sm" onClick={() => handleSaveNotes(trip.id)}>
                          <Save size={14} /> Save Notes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-trips-card card-base text-center">
          <Compass size={56} className="empty-icon-compass" />
          <h2>No Saved Trips Yet</h2>
          <p>You haven't saved any travel itineraries yet. Use our Smart Kerala Trip Planner to craft and save your dream vacation!</p>
          <Link to="/plan" className="btn btn-primary mt-3">
            <Sparkles size={18} /> Plan Your First Kerala Trip
          </Link>
        </div>
      )}
    </div>
  );
}
