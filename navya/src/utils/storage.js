// Storage helper for TravelLite saved itineraries & budget estimates

const TRIPS_KEY = 'travellite_saved_trips';
const BUDGET_KEY = 'travellite_budget_plans';

export const getSavedTrips = () => {
  try {
    const data = localStorage.getItem(TRIPS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error reading saved trips from localStorage:', err);
    return [];
  }
};

export const saveTrip = (trip) => {
  try {
    const trips = getSavedTrips();
    // Check if trip with same ID exists
    const existingIndex = trips.findIndex(t => t.id === trip.id);
    if (existingIndex >= 0) {
      trips[existingIndex] = trip;
    } else {
      trips.unshift(trip);
    }
    localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
    return true;
  } catch (err) {
    console.error('Error saving trip to localStorage:', err);
    return false;
  }
};

export const deleteTrip = (tripId) => {
  try {
    const trips = getSavedTrips();
    const updated = trips.filter(t => t.id !== tripId);
    localStorage.setItem(TRIPS_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Error deleting trip from localStorage:', err);
    return false;
  }
};

export const updateTripNotes = (tripId, notes) => {
  try {
    const trips = getSavedTrips();
    const trip = trips.find(t => t.id === tripId);
    if (trip) {
      trip.notes = notes;
      localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
      return true;
    }
    return false;
  } catch (err) {
    console.error('Error updating trip notes:', err);
    return false;
  }
};

export const saveBudgetPlan = (plan) => {
  try {
    localStorage.setItem(BUDGET_KEY, JSON.stringify(plan));
    return true;
  } catch (err) {
    console.error('Error saving budget plan:', err);
    return false;
  }
};

export const getBudgetPlan = () => {
  try {
    const data = localStorage.getItem(BUDGET_KEY);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Error reading budget plan:', err);
    return null;
  }
};
