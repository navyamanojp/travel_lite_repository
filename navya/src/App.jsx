import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import WeatherPage from './pages/WeatherPage';
import PlanTripPage from './pages/PlanTripPage';
import BudgetPage from './pages/BudgetPage';
import MyTripsPage from './pages/MyTripsPage';

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/plan" element={<PlanTripPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/my-trips" element={<MyTripsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
