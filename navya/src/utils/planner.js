import { DESTINATIONS } from '../data/destinations';

export const generateSmartItinerary = ({
  destinationId,
  days = 3,
  travelers = 2,
  interests = ['Nature', 'Sightseeing'],
  pace = 'Balanced' // 'Relaxed', 'Balanced', 'Action-Packed'
}) => {
  const dest = DESTINATIONS.find(d => d.id === destinationId) || DESTINATIONS[0];
  const numDays = Math.min(Math.max(Number(days) || 1, 1), 7);
  const numTravelers = Math.max(Number(travelers) || 1, 1);

  // Score attractions based on user selected interests
  const scoredAttractions = dest.attractions.map(att => {
    let score = 0;
    if (interests.includes(att.category)) {
      score += 5;
    } else {
      score += 1;
    }
    return { ...att, score };
  });

  // Sort by score descending
  scoredAttractions.sort((a, b) => b.score - a.score);

  const itineraryDays = [];
  let attractionIndex = 0;

  for (let d = 1; d <= numDays; d++) {
    const dayActivities = [];

    // Morning activity
    const morningAttraction = scoredAttractions[attractionIndex % scoredAttractions.length];
    attractionIndex++;
    dayActivities.push({
      slot: 'Morning (09:00 AM - 12:30 PM)',
      title: morningAttraction.name,
      category: morningAttraction.category,
      duration: morningAttraction.duration,
      costPerPerson: morningAttraction.cost,
      description: morningAttraction.description,
      image: morningAttraction.image
    });

    // Lunch / Afternoon activity
    const afternoonAttraction = scoredAttractions[attractionIndex % scoredAttractions.length];
    attractionIndex++;
    dayActivities.push({
      slot: 'Afternoon (01:30 PM - 05:00 PM)',
      title: afternoonAttraction.name,
      category: afternoonAttraction.category,
      duration: afternoonAttraction.duration,
      costPerPerson: afternoonAttraction.cost,
      description: afternoonAttraction.description,
      image: afternoonAttraction.image
    });

    // Evening activity / Dining
    const eveningAttraction = scoredAttractions[attractionIndex % scoredAttractions.length];
    attractionIndex++;
    dayActivities.push({
      slot: 'Evening & Night (06:00 PM - 09:00 PM)',
      title: eveningAttraction.name,
      category: eveningAttraction.category,
      duration: eveningAttraction.duration,
      costPerPerson: eveningAttraction.cost,
      description: eveningAttraction.description,
      image: eveningAttraction.image
    });

    // Calculate day estimated cost per person
    const dayAttractionCost = dayActivities.reduce((acc, curr) => acc + curr.costPerPerson, 0);
    const dayFoodEstimate = 600; // Average per day food cost per person
    const dayLocalTransport = 400; // Local rickshaw/cab per person

    itineraryDays.push({
      dayNumber: d,
      theme: d === 1 ? `Arrival & Highlights of ${dest.name}` : d === numDays ? `Final Exploration & Local Markets` : `Deep Dive into ${dest.name}'s Culture & Nature`,
      activities: dayActivities,
      estimatedCostPerPerson: dayAttractionCost + dayFoodEstimate + dayLocalTransport,
      travelTip: getTravelTip(dest.name, d)
    });
  }

  // Calculate totals
  const totalAttractionsCostPerPerson = itineraryDays.reduce((sum, day) => sum + day.estimatedCostPerPerson, 0);
  const avgHotelPerNight = dest.avgDailyCostPerPerson * 0.8;
  const accommodationTotal = Math.round(avgHotelPerNight * numDays);
  const grandTotalPerPerson = totalAttractionsCostPerPerson + accommodationTotal;
  const grandTotalTripCost = grandTotalPerPerson * numTravelers;

  return {
    id: `trip_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    createdAt: new Date().toISOString(),
    destinationId: dest.id,
    destinationName: dest.name,
    tagline: dest.tagline,
    destinationImage: dest.image,
    days: numDays,
    travelers: numTravelers,
    interests,
    pace,
    daysItinerary: itineraryDays,
    costSummary: {
      attractionsAndFoodPerPerson: totalAttractionsCostPerPerson,
      accommodationPerPerson: accommodationTotal,
      totalPerPerson: grandTotalPerPerson,
      grandTotalTrip: grandTotalTripCost
    },
    notes: ''
  };
};

function getTravelTip(destName, dayNumber) {
  const tips = [
    `Start early in the morning to beat local tourist traffic and capture clear morning photography in ${destName}.`,
    `Carry light hydration, comfortable walking footwear, and sunscreen during outdoor excursions.`,
    `Always negotiate auto-rickshaw fares or check pre-fixed rates before starting your journey.`,
    `Try local tropical fruits like tender coconut, jackfruit chips, and banana fritters from trusted street vendors.`,
    `Keep small cash denominations (₹50, ₹100) handy as some local view spots don't accept cards or UPI.`
  ];
  return tips[(dayNumber - 1) % tips.length];
}
