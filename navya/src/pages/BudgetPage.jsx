import React, { useState, useEffect } from 'react';
import { PieChart as PieChartIcon, IndianRupee, Users, Save, CheckCircle2, RefreshCcw, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { saveBudgetPlan, getBudgetPlan } from '../utils/storage';
import './BudgetPage.css';

const CHART_COLORS = ['#059669', '#0891B2', '#F59E0B', '#8B5CF6', '#EC4899'];

const PRESETS = [
  {
    name: 'Backpacker / Budget',
    transport: 2500,
    accommodation: 4500,
    food: 3000,
    activities: 1500,
    misc: 1000,
    travelers: 1,
    target: 15000
  },
  {
    name: 'Family Heritage (3 Days)',
    transport: 6000,
    accommodation: 14000,
    food: 8000,
    activities: 4500,
    misc: 3000,
    travelers: 2,
    target: 40000
  },
  {
    name: 'Luxury Resort & Houseboat',
    transport: 12000,
    accommodation: 35000,
    food: 15000,
    activities: 8000,
    misc: 5000,
    travelers: 2,
    target: 80000
  }
];

export default function BudgetPage() {
  const [expenses, setExpenses] = useState({
    transport: 5000,
    accommodation: 12000,
    food: 7000,
    activities: 3500,
    misc: 2500
  });

  const [travelers, setTravelers] = useState(2);
  const [targetBudget, setTargetBudget] = useState(35000);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load existing plan from localStorage on mount
  useEffect(() => {
    const existing = getBudgetPlan();
    if (existing) {
      if (existing.expenses) setExpenses(existing.expenses);
      if (existing.travelers) setTravelers(existing.travelers);
      if (existing.targetBudget) setTargetBudget(existing.targetBudget);
    }
  }, []);

  const handleExpenseChange = (key, value) => {
    setExpenses(prev => ({
      ...prev,
      [key]: Math.max(0, Number(value) || 0)
    }));
  };

  const applyPreset = (preset) => {
    setExpenses({
      transport: preset.transport,
      accommodation: preset.accommodation,
      food: preset.food,
      activities: preset.activities,
      misc: preset.misc
    });
    setTravelers(preset.travelers);
    setTargetBudget(preset.target);
  };

  // Calculations
  const totalExpense = Object.values(expenses).reduce((sum, val) => sum + val, 0);
  const costPerPerson = travelers > 0 ? Math.round(totalExpense / travelers) : totalExpense;
  const budgetDifference = targetBudget - totalExpense;
  const percentageUsed = targetBudget > 0 ? Math.round((totalExpense / targetBudget) * 100) : 0;

  // Chart Data format
  const chartData = [
    { name: 'Transport', value: expenses.transport },
    { name: 'Accommodation', value: expenses.accommodation },
    { name: 'Food & Dining', value: expenses.food },
    { name: 'Activities & Sightseeing', value: expenses.activities },
    { name: 'Miscellaneous', value: expenses.misc }
  ].filter(item => item.value > 0);

  const handleSaveBudget = () => {
    const plan = {
      expenses,
      travelers,
      targetBudget,
      totalExpense,
      costPerPerson,
      updatedAt: new Date().toISOString()
    };
    const success = saveBudgetPlan(plan);
    if (success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <div className="budget-page container section-padding animate-fade-in">
      {/* Header */}
      <div className="budget-header text-center">
        <span className="section-tag">
          <PieChartIcon size={14} /> Smart Budget Analytics
        </span>
        <h1 className="section-title">Kerala Travel Cost Calculator</h1>
        <p className="section-subtitle mx-auto">
          Calculate trip expenses across stay, transport, food, and activities with real-time Recharts breakdown charts.
        </p>
      </div>

      {/* Presets Bar */}
      <div className="presets-bar card-base">
        <span className="presets-label">
          <Sparkles size={14} /> Quick Budget Presets:
        </span>
        <div className="presets-buttons">
          {PRESETS.map((p, idx) => (
            <button key={idx} className="preset-btn" onClick={() => applyPreset(p)}>
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="budget-grid">
        {/* Expenses Input Form */}
        <div className="budget-form-card card-base">
          <h3 className="card-heading">Expense Categories (₹)</h3>

          <div className="expense-inputs-list">
            <div className="form-group">
              <label className="form-label">🚗 Transportation (Flight, Train, Cabs, Fuel)</label>
              <input
                type="number"
                min="0"
                value={expenses.transport}
                onChange={(e) => handleExpenseChange('transport', e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">🏨 Accommodation (Resort, Houseboat, Homestay)</label>
              <input
                type="number"
                min="0"
                value={expenses.accommodation}
                onChange={(e) => handleExpenseChange('accommodation', e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">🍛 Food & Dining (Meals, Snacks, Drinks)</label>
              <input
                type="number"
                min="0"
                value={expenses.food}
                onChange={(e) => handleExpenseChange('food', e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">🎟️ Activities & Sightseeing (Tickets, Safari, Guides)</label>
              <input
                type="number"
                min="0"
                value={expenses.activities}
                onChange={(e) => handleExpenseChange('activities', e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">🛍️ Miscellaneous (Shopping, Souvenirs, Tips)</label>
              <input
                type="number"
                min="0"
                value={expenses.misc}
                onChange={(e) => handleExpenseChange('misc', e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="budget-meta-inputs">
            <div className="form-group">
              <label className="form-label">
                <Users size={14} /> Number of Travelers
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={travelers}
                onChange={(e) => setTravelers(Math.max(1, Number(e.target.value) || 1))}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <IndianRupee size={14} /> Target Budget (₹)
              </label>
              <input
                type="number"
                min="0"
                value={targetBudget}
                onChange={(e) => setTargetBudget(Number(e.target.value) || 0)}
                className="form-control"
              />
            </div>
          </div>

          <button className="btn btn-amber btn-block mt-3" onClick={handleSaveBudget}>
            <Save size={16} /> Save Budget Calculation
          </button>
          {savedSuccess && (
            <p className="saved-text text-center mt-2">
              <CheckCircle2 size={14} /> Saved to Local Storage!
            </p>
          )}
        </div>

        {/* Analytics & Recharts Section */}
        <div className="budget-analytics-col">
          {/* Top Summary Cards */}
          <div className="summary-cards-grid">
            <div className="stat-box primary">
              <span className="stat-title">Total Estimated Trip Cost</span>
              <span className="stat-number">₹{totalExpense.toLocaleString('en-IN')}</span>
              <span className="stat-sub font-semibold">Overall Expenses</span>
            </div>

            <div className="stat-box emerald">
              <span className="stat-title">Cost Per Person ({travelers} Travelers)</span>
              <span className="stat-number">₹{costPerPerson.toLocaleString('en-IN')}</span>
              <span className="stat-sub">Per Traveler</span>
            </div>
          </div>

          {/* Budget vs Target Status Bar */}
          <div className="budget-status-card card-base">
            <div className="status-header">
              <span className="status-title">Target Budget Health</span>
              <span className={`status-badge ${percentageUsed > 100 ? 'over' : percentageUsed > 85 ? 'warning' : 'good'}`}>
                {percentageUsed > 100 ? 'Over Budget' : percentageUsed > 85 ? 'Near Target' : 'Under Budget'}
              </span>
            </div>

            <div className="budget-progress-bar-bg">
              <div 
                className={`budget-progress-fill ${percentageUsed > 100 ? 'over' : percentageUsed > 85 ? 'warning' : 'good'}`}
                style={{ width: `${Math.min(percentageUsed, 100)}%` }}
              ></div>
            </div>

            <div className="status-footer">
              <span>Used: {percentageUsed}% of ₹{targetBudget.toLocaleString('en-IN')}</span>
              <span>
                {budgetDifference >= 0 
                  ? `₹${budgetDifference.toLocaleString('en-IN')} Remaining`
                  : `₹${Math.abs(budgetDifference).toLocaleString('en-IN')} Exceeded`}
              </span>
            </div>
          </div>

          {/* Recharts Pie Chart Display */}
          <div className="chart-card card-base">
            <h3 className="chart-heading">Expense Distribution Breakdown</h3>
            {chartData.length > 0 ? (
              <div className="pie-chart-wrapper">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Cost']}
                      contentStyle={{ backgroundColor: '#0B3327', color: '#FFF', borderRadius: '8px', border: 'none' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="no-data-text">Enter expenses above to see pie chart breakdown.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
