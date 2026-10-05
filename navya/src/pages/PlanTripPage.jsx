import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DESTINATIONS, INTEREST_TAGS } from '../data/destinations';
import { generateSmartItinerary } from '../utils/planner';
import { saveTrip } from '../utils/storage';
import { 
  Sparkles, Calendar, Users, Compass, CheckCircle2, RefreshCw, 
  BookmarkCheck, Printer, ArrowRight, Clock, IndianRupee, MapPin, AlertCircle 
} from 'lucide-react';
import './PlanTripPage.css';

export default function PlanTripPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const defaultDestId = searchParams.get('destination') || 'munnar';

  // Form State
  const [destinationId, setDestinationId] = useState(defaultDestId);
  const [days, setDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [selectedInterests, setSelectedInterests] = useState(['Nature', 'Sightseeing']);
  const [pace, setPace] = useState('Balanced');

  // Generated Itinerary State
  const [itinerary, setItinerary] = useState(null);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate initial itinerary on load
  useEffect(() => {
    handleGenerateItinerary();
  }, [defaultDestId]);

  const handleInterestToggle = (interestId) => {
    if (selectedInterests.includes(interestId)) {
      if (selectedInterests.length === 1) return; // Keep at least 1
      setSelectedInterests(selectedInterests.filter(i => i !== interestId));
    } else {
      setSelectedInterests([...selectedInterests, interestId]);
    }
  };

  const handleGenerateItinerary = () => {
    setIsGenerating(true);
    setSavedSuccess(false);

    // Simulate subtle AI recommendation calculation delay
    setTimeout(() => {
      const generated = generateSmartItinerary({
        destinationId,
        days,
        travelers,
        interests: selectedInterests,
        pace
      });
      setItinerary(generated);
      setIsGenerating(false);
    }, 400);
  };

  const handleSaveTrip = () => {
    if (!itinerary) return;
    const success = saveTrip(itinerary);
    if (success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="plan-page container section-padding animate-fade-in">
      {/* Header */}
      <div className="plan-header text-center">
        <span className="section-tag">
          <Sparkles size={14} /> Smart Kerala Planner
        </span>
        <h1 className="section-title">Design Your Custom Kerala Itinerary</h1>
        <p className="section-subtitle mx-auto">
          Tailor your day-by-day experience based on your favorite attractions, group size, and travel pace.
        </p>
      </div>

      <div className="plan-grid">
        {/* Planner Input Form Panel */}
        <div className="planner-form-card card-base">
          <h3 className="form-card-title">
            <Compass size={18} /> Trip Preferences
          </h3>

          {/* 1. Destination Select */}
          <div className="form-group">
            <label className="form-label">
              <MapPin size={14} /> Choose Destination
            </label>
            <select
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
              className="form-control"
            >
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.category} - {d.idealDays} Days Recommended)
                </option>
              ))}
            </select>
          </div>

          {/* 2. Duration & Traveler Count */}
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">
                <Calendar size={14} /> Duration (Days)
              </label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="form-control"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Day' : 'Days'}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <Users size={14} /> Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="form-control"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Person' : 'People'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Interests Selection */}
          <div className="form-group">
            <label className="form-label">Select Travel Interests</label>
            <div className="interests-grid">
              {INTEREST_TAGS.map((tag) => {
                const isChecked = selectedInterests.includes(tag.id);
                return (
                  <button
                    key={tag.id}
                    type="button"
                    className={`interest-btn ${isChecked ? 'active' : ''}`}
                    onClick={() => handleInterestToggle(tag.id)}
                  >
                    <CheckCircle2 size={14} className={isChecked ? 'check-visible' : 'check-hidden'} />
                    <span>{tag.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Travel Pace */}
          <div className="form-group">
            <label className="form-label">Travel Pace</label>
            <div className="pace-selector">
              {['Relaxed', 'Balanced', 'Action-Packed'].map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`pace-btn ${pace === p ? 'active' : ''}`}
                  onClick={() => setPace(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            className="btn btn-primary btn-block mt-3"
            onClick={handleGenerateItinerary}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="spin-icon" size={18} />
                <span>Crafting Custom Plan...</span>
              </>
            ) : (
              <>
                <Sparkles size={18} />
                <span>Generate Itinerary</span>
              </>
            )}
          </button>
        </div>

        {/* Itinerary Preview & Action Output */}
        <div className="itinerary-display-panel">
          {savedSuccess && (
            <div className="success-banner animate-fade-in">
              <CheckCircle2 size={20} />
              <span>Itinerary saved successfully to <strong>My Trips</strong>!</span>
            </div>
          )}

          {itinerary ? (
            <div className="itinerary-card card-base">
              {/* Itinerary Banner */}
              <div className="itinerary-header">
                <div className="itinerary-dest-info">
                  <span className="badge badge-forest">{itinerary.days} Days Itinerary</span>
                  <h2>{itinerary.destinationName} Journey</h2>
                  <p>{itinerary.tagline}</p>
                </div>

                <div className="itinerary-cost-badge">
                  <span className="cost-label">Est. Total Trip Cost ({itinerary.travelers} Travelers)</span>
                  <span className="cost-amount">₹{itinerary.costSummary.grandTotalTrip.toLocaleString('en-IN')}</span>
                  <span className="cost-sub">₹{itinerary.costSummary.totalPerPerson.toLocaleString('en-IN')} / person</span>
                </div>
              </div>

              {/* Action Buttons Toolbar */}
              <div className="itinerary-toolbar">
                <button className="btn btn-secondary btn-sm" onClick={handleGenerateItinerary}>
                  <RefreshCw size={14} /> Regenerate
                </button>
                <button className="btn btn-amber btn-sm" onClick={handleSaveTrip}>
                  <BookmarkCheck size={14} /> Save to My Trips
                </button>
                <button className="btn btn-secondary btn-sm" onClick={handlePrint}>
                  <Printer size={14} /> Print Itinerary
                </button>
              </div>

              {/* Day-Wise Timeline */}
              <div className="days-timeline">
                {itinerary.daysItinerary.map((day) => (
                  <div key={day.dayNumber} className="day-block">
                    <div className="day-block-header">
                      <span className="day-number-badge">Day {day.dayNumber}</span>
                      <h3 className="day-theme">{day.theme}</h3>
                    </div>

                    <div className="day-activities-list">
                      {day.activities.map((act, actIdx) => (
                        <div key={actIdx} className="activity-card">
                          <img src={act.image} alt={act.title} className="activity-img" />
                          <div className="activity-content">
                            <div className="activity-meta">
                              <span className="activity-slot">{act.slot}</span>
                              <span className="activity-category-badge">{act.category}</span>
                            </div>
                            <h4 className="activity-title">{act.title}</h4>
                            <p className="activity-desc">{act.description}</p>
                            <div className="activity-footer">
                              <span><Clock size={12} /> {act.duration}</span>
                              <span><IndianRupee size={12} /> {act.costPerPerson === 0 ? 'Free' : `₹${act.costPerPerson}/person`}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Day Tip */}
                    <div className="day-tip-box">
                      <Sparkles size={14} className="tip-icon" />
                      <span><strong>Traveler Tip:</strong> {day.travelTip}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Cost Breakdown Footer */}
              <div className="itinerary-cost-breakdown">
                <h4>Budget Estimate Breakdown</h4>
                <div className="cost-breakdown-grid">
                  <div>
                    <span className="lbl">Sightseeing & Entry Fees:</span>
                    <span className="val">₹{itinerary.costSummary.attractionsAndFoodPerPerson} / person</span>
                  </div>
                  <div>
                    <span className="lbl">Est. Hotel & Food ({itinerary.days} days):</span>
                    <span className="val">₹{itinerary.costSummary.accommodationPerPerson} / person</span>
                  </div>
                  <div>
                    <span className="lbl">Total Per Person:</span>
                    <span className="val highlight">₹{itinerary.costSummary.totalPerPerson}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-base text-center p-5">
              <p>Click "Generate Itinerary" to create your customized trip plan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
