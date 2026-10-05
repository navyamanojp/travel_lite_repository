// Detailed dataset for TravelLite Kerala destinations
export const DESTINATIONS = [
  {
    id: 'munnar',
    name: 'Munnar',
    tagline: 'Mist-Clad Hills & Endless Tea Plantations',
    category: 'Hill Station',
    description: 'Situated at 1,600m above sea level in the Western Ghats, Munnar is famous for rolling tea gardens, rare Nilgiri Tahr mountain goats, misty valleys, and breathtaking waterfalls.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 10.0889, lon: 77.0595 },
    elevation: '1,600 meters',
    bestTimeToVisit: 'September to March',
    idealDays: 3,
    avgDailyCostPerPerson: 1800,
    tags: ['Nature', 'Adventure', 'Relaxation', 'Sightseeing'],
    highlights: ['Tea Gardens', 'Eravikulam National Park', 'Anamudi Peak', 'Mattupetty Dam'],
    attractions: [
      {
        id: 'm1',
        name: 'Eravikulam National Park & Rajamalai',
        category: 'Nature',
        duration: '3 hours',
        cost: 200,
        description: 'Home to the endangered Nilgiri Tahr. Walk through pristine hill trails offering panoramic view of Anamudi Peak.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'm2',
        name: 'Tea Museum & Lockhart Tea Estate',
        category: 'Sightseeing',
        duration: '2 hours',
        cost: 120,
        description: 'Learn the history of tea making in Munnar and sample freshly brewed orthodox black and green teas.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'm3',
        name: 'Mattupetty Dam & Speed Boat Ride',
        category: 'Adventure',
        duration: '2 hours',
        cost: 350,
        description: 'Serene water reservoir surrounded by tea gardens and pine forest. Speed boating and horse riding available.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'm4',
        name: 'Top Station Viewpoint',
        category: 'Sightseeing',
        duration: '2.5 hours',
        cost: 50,
        description: 'The highest point in Munnar, offering cloud-kissed views over the neighboring state of Tamil Nadu.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'm5',
        name: 'Attukad Waterfalls Trek',
        category: 'Adventure',
        duration: '2 hours',
        cost: 0,
        description: 'Cascading waterfalls nestled between lush hills. Ideal for photography and gentle nature walks.',
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'm6',
        name: 'Traditional Kerala Cuisine Tasting at Rapsy',
        category: 'Food',
        duration: '1.5 hours',
        cost: 300,
        description: 'Enjoy authentic Malabar parottas, Kappa with Fish Curry, and fresh Kerala tea.',
        image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      }
    ]
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    tagline: 'Ancient Caves, Waterfalls & Wildlife Sanctuaries',
    category: 'Hill Station',
    description: 'A green paradise packed with spice plantations, prehistoric rock carvings at Edakkal Caves, sparkling lakes, and dense elephant habitats.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 11.6854, lon: 76.1320 },
    elevation: '700 - 2,100 meters',
    bestTimeToVisit: 'October to May',
    idealDays: 3,
    avgDailyCostPerPerson: 2000,
    tags: ['Nature', 'Adventure', 'Sightseeing'],
    highlights: ['Edakkal Caves', 'Banasura Sagar Dam', 'Chembra Peak', 'Muthanga Safari'],
    attractions: [
      {
        id: 'w1',
        name: 'Edakkal Caves Prehistoric Petroglyphs',
        category: 'Sightseeing',
        duration: '3 hours',
        cost: 100,
        description: 'Neolithic rock engravings dating back to 6,000 BCE accessed via a scenic mountain climb.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'w2',
        name: 'Banasura Sagar Earth Dam',
        category: 'Nature',
        duration: '2 hours',
        cost: 80,
        description: 'India\'s largest earth dam. Features coracle boating and ziplining against a backdrop of mist-capped peaks.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'w3',
        name: 'Chembra Peak & Heart Lake Trek',
        category: 'Adventure',
        duration: '4 hours',
        cost: 750,
        description: 'Trek through high altitude grasslands to reach the famous naturally heart-shaped lake (Hridaya Saras).',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'w4',
        name: 'Muthanga Wildlife Sanctuary Safari',
        category: 'Adventure',
        duration: '2.5 hours',
        cost: 500,
        description: 'Jeep safari through teak forests to spot wild elephants, deer, gaurs, and exotic bird species.',
        image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'w5',
        name: 'Kuruva Island Bamboo Rafting',
        category: 'Relaxation',
        duration: '2.5 hours',
        cost: 250,
        description: 'Uninhabited protected river islands surrounded by tributaries of the Kabini River.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      }
    ]
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    tagline: 'Venice of the East & Floating Houseboats',
    category: 'Backwaters',
    description: 'Renowned world-wide for tranquil backwater cruises aboard traditional Kettuvallam houseboats, coconut lagoons, and paddy field villages.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 9.4981, lon: 76.3388 },
    elevation: 'Sea level',
    bestTimeToVisit: 'November to February',
    idealDays: 2,
    avgDailyCostPerPerson: 2500,
    tags: ['Relaxation', 'Sightseeing', 'Food'],
    highlights: ['Houseboat Cruise', 'Vembanad Lake', 'Marari Beach', 'Kuttanad Farming'],
    attractions: [
      {
        id: 'a1',
        name: 'Vembanad Lake Houseboat Cruise',
        category: 'Relaxation',
        duration: '5 hours',
        cost: 2500,
        description: 'Glide through idyllic palm-fringed backwater canals enjoying freshly prepared Karimeen Pollichathu meal.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'a2',
        name: 'Shikara Boat Tour through Narrow Canals',
        category: 'Sightseeing',
        duration: '3 hours',
        cost: 800,
        description: 'Explore quiet interior village canals that larger houseboats cannot reach.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'a3',
        name: 'Marari Beach Sunset Stroll',
        category: 'Relaxation',
        duration: '2 hours',
        cost: 0,
        description: 'Pristine, quiet white sand beach lined with swaying coconut trees away from commercial crowds.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      },
      {
        id: 'a4',
        name: 'Kuttanad Below Sea Level Farm Tour',
        category: 'Nature',
        duration: '2 hours',
        cost: 150,
        description: 'Witness one of the rare places in the world where farming is conducted 2 to 3 meters below sea level.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'a5',
        name: 'Seafood Feast at Toddy Shop',
        category: 'Food',
        duration: '1.5 hours',
        cost: 400,
        description: 'Authentic spicy Kerala duck roast, crab curry, and natural sweet coconut toddy.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      }
    ]
  },
  {
    id: 'kochi',
    name: 'Kochi',
    tagline: 'Colonial Heritage & Iconic Chinese Fishing Nets',
    category: 'Cultural',
    description: 'A vibrant port city blending Portuguese, Dutch, British, and Arab historical influences with modern cafes, art galleries, and spice markets.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 9.9312, lon: 76.2673 },
    elevation: '0 - 10 meters',
    bestTimeToVisit: 'October to March',
    idealDays: 2,
    avgDailyCostPerPerson: 2200,
    tags: ['Sightseeing', 'Food', 'Relaxation'],
    highlights: ['Chinese Fishing Nets', 'Fort Kochi Heritage Stroll', 'Mattancherry Palace', 'Kathakali Dance Show'],
    attractions: [
      {
        id: 'k1',
        name: 'Fort Kochi Historic Walking Tour',
        category: 'Sightseeing',
        duration: '2.5 hours',
        cost: 150,
        description: 'Walk past 500-year-old Portuguese houses, St. Francis Church, and classic street murals.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'k2',
        name: 'Sunset Chinese Fishing Nets Experience',
        category: 'Sightseeing',
        duration: '1.5 hours',
        cost: 50,
        description: 'Watch fishermen operate gigantic cantilevered wooden fishing nets introduced by Chinese traders in the 14th century.',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      },
      {
        id: 'k3',
        name: 'Jew Town & Paradesi Synagogue',
        category: 'Sightseeing',
        duration: '2 hours',
        cost: 50,
        description: 'Browse antique shops, spice warehouses smelling of cardamom, and the oldest active synagogue in the Commonwealth.',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'k4',
        name: 'Kathakali Performance & Makeup Viewing',
        category: 'Sightseeing',
        duration: '2 hours',
        cost: 400,
        description: 'Watch classical Kerala dance drama featuring ornate costumes and facial makeup application.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      },
      {
        id: 'k5',
        name: 'Fort Kochi Cafe Hopping & Coastal Dining',
        category: 'Food',
        duration: '2 hours',
        cost: 500,
        description: 'Sip artisan cold brew and sample grilled catch-of-the-day at iconic colonial courtyard cafes.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      }
    ]
  },
  {
    id: 'varkala',
    name: 'Varkala',
    tagline: 'Dramatic Red Cliffs & Bohemian Arabian Sea Beaches',
    category: 'Beach',
    description: 'Unique coastal destination where steep red clay cliffs drop dramatically into the Arabian Sea. Popular for cliffside dining, yoga, and surfing.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 8.7379, lon: 76.7163 },
    elevation: '15 - 30 meters',
    bestTimeToVisit: 'October to March',
    idealDays: 2,
    avgDailyCostPerPerson: 1900,
    tags: ['Relaxation', 'Adventure', 'Food', 'Nature'],
    highlights: ['Varkala Cliff', 'Papanasam Beach', 'Kapil Lake & Backwaters', 'Janardhana Swamy Temple'],
    attractions: [
      {
        id: 'v1',
        name: 'Papanasam Beach Holy Dip & Relaxation',
        category: 'Relaxation',
        duration: '2 hours',
        cost: 0,
        description: 'Golden sandy beach believed to cleanse sins. Ideal for swimming and sunbathing under cliff shadows.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'v2',
        name: 'North Cliff Walk & Ocean View Sunset',
        category: 'Sightseeing',
        duration: '2 hours',
        cost: 0,
        description: 'A 2km clifftop path packed with bohemian cafes, handicraft shops, and breathtaking sunset panoramas.',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      },
      {
        id: 'v3',
        name: 'Kappil Beach & Estuary Boating',
        category: 'Nature',
        duration: '2 hours',
        cost: 300,
        description: 'Where the tranquil Kappil backwater lake meets the crashing waves of the Arabian Sea.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'v4',
        name: 'Surfing Lesson at Black Beach',
        category: 'Adventure',
        duration: '2 hours',
        cost: 1200,
        description: 'Learn beginner wave riding from certified local surf instructors in warm gentle swells.',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'v5',
        name: 'Clifftop Candlelight Seafood Dinner',
        category: 'Food',
        duration: '2 hours',
        cost: 600,
        description: 'Feast on freshly caught tiger prawns, calamari, and grilled red snapper overlooking the illuminated surf.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      }
    ]
  },
  {
    id: 'thekkady',
    name: 'Thekkady',
    tagline: 'Periyar Tiger Reserve & Spice Plantations',
    category: 'Wildlife',
    description: 'Heart of Kerala spice country surrounding Periyar Lake, where wild herds of elephants swim across the lake waters.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 9.6027, lon: 77.1625 },
    elevation: '900 - 1,200 meters',
    bestTimeToVisit: 'September to April',
    idealDays: 2,
    avgDailyCostPerPerson: 2100,
    tags: ['Nature', 'Adventure', 'Sightseeing'],
    highlights: ['Periyar Boat Safari', 'Organic Spice Plantation Tour', 'Bamboo Rafting', 'Kalaripayattu Show'],
    attractions: [
      {
        id: 't1',
        name: 'Periyar Lake Boat Wildlife Safari',
        category: 'Nature',
        duration: '2 hours',
        cost: 450,
        description: 'Cruise on Periyar Lake surrounded by dead tree trunks to spot wild elephants, gaurs, and otters coming to drink.',
        image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 't2',
        name: 'Organic Spice Garden Guided Walk',
        category: 'Sightseeing',
        duration: '1.5 hours',
        cost: 200,
        description: 'Touch and smell fresh cardamom pods, black pepper vines, cinnamon bark, vanilla, and nutmeg.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 't3',
        name: 'Full Day Jungle Bamboo Rafting',
        category: 'Adventure',
        duration: '6 hours',
        cost: 2000,
        description: 'Hike through deep evergreen forests and raft across Periyar Lake with armed forest guards.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 't4',
        name: 'Kalaripayattu Ancient Martial Arts Show',
        category: 'Sightseeing',
        duration: '1 hour',
        cost: 300,
        description: 'Experience intense demonstrations of the world\'s oldest existing martial art with swords, shields, and flexible blades.',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      }
    ]
  },
  {
    id: 'vagamon',
    name: 'Vagamon',
    tagline: 'Pine Forests, Rolling Meadows & Tranquility',
    category: 'Hill Station',
    description: 'An offbeat, untouched hill station known for velvety green meadows, tall pine forests, tea estates, and thrilling glass bridge walks.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 9.6874, lon: 76.9056 },
    elevation: '1,100 meters',
    bestTimeToVisit: 'Throughout the year',
    idealDays: 2,
    avgDailyCostPerPerson: 1600,
    tags: ['Nature', 'Relaxation', 'Adventure'],
    highlights: ['Vagamon Pine Forest', 'Vagamon Meadows', 'Glass Bridge', 'Kurusumala Ashram'],
    attractions: [
      {
        id: 'vg1',
        name: 'Vagamon Pine Valley Forest Walk',
        category: 'Nature',
        duration: '2 hours',
        cost: 50,
        description: 'Stroll through towering British-era pine trees filtering soft sunbeams. A tranquil spot for walking and photography.',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'vg2',
        name: 'Rolling Meadows (Vagamon Green Hills)',
        category: 'Relaxation',
        duration: '2 hours',
        cost: 30,
        description: 'Endless undulating grassy slopes overlooking deep valleys. Great for picnics and flying kites.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'vg3',
        name: 'Vagamon Glass Bridge Skywalk',
        category: 'Adventure',
        duration: '1 hour',
        cost: 250,
        description: 'Walk above a 300ft deep canyon on India\'s longest cantilever glass bridge for an adrenaline rush.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Morning'
      },
      {
        id: 'vg4',
        name: 'Marmala Waterfalls Jeep Trek',
        category: 'Adventure',
        duration: '2.5 hours',
        cost: 350,
        description: 'Off-road jeep journey leading to a 111-foot waterfall cascading into a natural swimming pool.',
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      }
    ]
  },
  {
    id: 'kozhikode',
    name: 'Kozhikode',
    tagline: 'Historical Calicut, Halwa & Malabar Biryani',
    category: 'Cultural',
    description: 'The historic City of Spices where Vasco da Gama landed in 1498. Famous for legendary Malabar culinary culture and golden sandy beaches.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 11.2588, lon: 75.7804 },
    elevation: ' Sea level',
    bestTimeToVisit: 'October to March',
    idealDays: 2,
    avgDailyCostPerPerson: 1700,
    tags: ['Food', 'Sightseeing', 'Cultural'],
    highlights: ['Kozhikode Beach Sunset', 'Sweet Street (SM Street)', 'Kappad Beach', 'Malabar Biryani Trail'],
    attractions: [
      {
        id: 'kz1',
        name: 'Historic SM Street (Sweetmeat Street) Food & Spice Tour',
        category: 'Food',
        duration: '2.5 hours',
        cost: 250,
        description: 'Taste authentic Kozhikode Halwa in vibrant colors, banana chips cooked in fresh coconut oil, and aromatic spices.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'kz2',
        name: 'Iconic Paragon Malabar Biryani Lunch',
        category: 'Food',
        duration: '1.5 hours',
        cost: 400,
        description: 'World famous Kaima rice Dum Biryani served with date pickle, coconut chutney, and spiced chammanthi.',
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Afternoon'
      },
      {
        id: 'kz3',
        name: 'Kappad Beach (Vasco da Gama Landing Site)',
        category: 'Sightseeing',
        duration: '2 hours',
        cost: 0,
        description: 'Blue Flag certified clean beach featuring ancient rock formations where European trade history began.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      },
      {
        id: 'kz4',
        name: 'Kozhikode Beach Pier & Sunset Pickles',
        category: 'Relaxation',
        duration: '2 hours',
        cost: 100,
        description: 'Walk down historic broken piers and sample street delicacies like pickled mango, mussels fry, and ice sarbath.',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
        bestTimeOfDay: 'Evening'
      }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Hill Station',
  'Backwaters',
  'Beach',
  'Wildlife',
  'Cultural'
];

export const INTEREST_TAGS = [
  { id: 'Nature', label: 'Nature & Greenery', icon: 'Trees' },
  { id: 'Adventure', label: 'Adventure & Treks', icon: 'Compass' },
  { id: 'Sightseeing', label: 'Sightseeing & Culture', icon: 'Landmark' },
  { id: 'Food', label: 'Local Food & Culinary', icon: 'Utensils' },
  { id: 'Relaxation', label: 'Relaxation & Wellness', icon: 'Sun' }
];
