# TravelLite – Smart Travel Planner

A modern, responsive, full-featured web application for planning trips to **Kerala, India ("God's Own Country")**. Built with **React.js, Vite, React Router, Open-Meteo Weather API, Recharts, and localStorage persistence**.

![TravelLite Banner](https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Features

### 1. 🏠 Home Page
- **Hero Banner:** Stunning visuals with quick destination search bar and tag pills.
- **Curated Hotspots:** Showcase of top Kerala destinations (Munnar, Wayanad, Alleppey, Kochi, Varkala, etc.).
- **Features Breakdown:** Highlights of smart itinerary generation, live Open-Meteo weather radar, and budget analytics.

### 2. 🗺️ Explore Destinations
- Filterable cards for **Munnar, Wayanad, Alleppey, Kochi, Varkala, Thekkady, Vagamon, Kozhikode**.
- Category filter pills: **Hill Station, Backwaters, Beach, Wildlife, Cultural**.
- Sort options by daily budget (Low to High / High to Low) and recommended days.
- Interactive **Destination Detail Modal** featuring top attractions, duration, cost, and ideal visiting months.

### 3. 🌤️ Weather Hub (Live Open-Meteo Integration)
- **Real-Time Data:** Current temperature, weather condition (mapped WMO weather codes), relative humidity, and wind speed.
- **7-Day Meteorological Forecast Cards:** Max/Min temperature ranges and rain conditions.
- **12-Hour Temperature Curve:** Recharts area chart visualizing hourly temperature trends.
- **Destination Switcher:** Easily toggle live radar across all Kerala destinations.

### 4. 🧭 Plan a Trip (Smart Itinerary Generator)
- Choose destination, trip duration (1–7 days), group size, interest tags (*Nature, Adventure, Sightseeing, Food, Relaxation*), and travel pace.
- **Dynamic Scoring Algorithm:** Generates structured day-wise plans split into Morning, Afternoon, and Evening slots.
- **Action Buttons:** Regenerate plan, print/export itinerary, and save directly to local storage.

### 5. 📊 Budget Analytics & Calculator
- Input expense estimates across 5 categories: **Transportation, Accommodation, Food & Dining, Activities & Sightseeing, Miscellaneous**.
- Traveler scaling & Target Budget comparisons.
- **Recharts Doughnut Breakdown Chart:** Visual pie chart showing cost distribution percentage.
- Budget Health Indicator (**Under Budget / Near Limit / Over Budget**).

### 6. 🔖 My Trips (LocalStorage Persistence)
- Persistent saved itineraries with search and filter support.
- **Expandable Day-by-Day Accordion:** Detailed attraction timeline with itemized costs.
- **Editable Travel Notes & Checklist:** Add hotel booking references, phone numbers, or packing lists.
- Delete and print trip summary options.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 (Vite)
- **Routing:** React Router v6
- **Styling:** Custom Vanilla CSS Design System (Deep Green `#0B3327`, Emerald `#10B981`, Amber `#D97706`, Cream `#F8F6F0`)
- **Data Visualization:** Recharts
- **Icons:** Lucide React
- **Weather API:** Open-Meteo (HTTPS REST API, no key required)
- **State & Storage:** React Hooks + `localStorage` API

---

## 🚀 Local Installation & Setup

Follow these steps to run TravelLite on your local computer:

1. **Clone or navigate to the repository:**
   ```bash
   cd navya
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Verification

To verify or generate production static files:

```bash
npm run build
```

The output will be created inside the `dist/` directory.

---

## 🌐 Deploying to Vercel

Deploying **TravelLite** on Vercel takes under 2 minutes:

### Option A: Via Vercel CLI
1. Install Vercel CLI globally (if not installed):
   ```bash
   npm i -g vercel
   ```
2. Run deploy command in the root folder:
   ```bash
   vercel
   ```
3. Follow the prompts (Select project root, use Vite default build command `npm run build` and output directory `dist`).

### Option B: Via Vercel Dashboard (Git Integration)
1. Push this codebase to GitHub / GitLab / Bitbucket.
2. Log into [Vercel Dashboard](https://vercel.com/) and click **"New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

---

## 📄 License

Created for travel enthusiasts exploring Kerala. Free to use and extend.
