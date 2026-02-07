import { useState, useEffect, useContext } from 'react';
import { meals, workouts, users } from '../services/api';
import { ThemeContext } from '../context/ThemeContext';
import MealForm from '../components/MealForm';
import WorkoutForm from '../components/WorkoutForm';
import ItemList from '../components/ItemList';
import DashboardStats from '../components/DashboardStats';

export default function Dashboard() {
  const { isDark } = useContext(ThemeContext);
  const [mealList, setMealList] = useState([]);
  const [workoutList, setWorkoutList] = useState([]);
  const [profile, setProfile] = useState({});
  const [filters, setFilters] = useState({ search: '', startDate: '', endDate: '' });
  const [showMealSuggestions, setShowMealSuggestions] = useState(false);
  const [showWorkoutSuggestions, setShowWorkoutSuggestions] = useState(false);

  const mealSuggestions = ['Chicken Salad', 'Oatmeal', 'Protein Shake', 'Salmon', 'Greek Yogurt', 'Eggs', 'Rice Bowl', 'Pasta', 'Sandwich', 'Smoothie'];
  const workoutSuggestions = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Weight Training', 'Push-ups', 'Squats', 'Plank', 'Jumping Jacks', 'Burpees'];

  const loadData = async () => {
    const [mealsData, workoutsData, profileData] = await Promise.all([
      meals.getAll(filters),
      workouts.getAll(filters),
      users.getProfile()
    ]);
    setMealList(mealsData || []);
    setWorkoutList(workoutsData || []);
    setProfile(profileData || {});
  };

  useEffect(() => { loadData(); }, []);
  useEffect(() => { 
    const timer = setTimeout(() => loadData(), 300);
    return () => clearTimeout(timer);
  }, [filters]);

  const cardStyle = {
    background: isDark ? '#16213e' : '#fff',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: isDark ? '0 5px 20px rgba(0,0,0,0.5)' : '0 5px 20px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10px', fontSize: '32px' }}>💪 Fitness & Diet Tracker</h1>
      <p style={{ color: 'white', textAlign: 'center', marginBottom: '30px', opacity: 0.9 }}>Track your daily nutrition and fitness goals</p>
      
      <DashboardStats meals={mealList} workouts={workoutList} profile={profile} isDark={isDark} />
      
      <div style={{ ...cardStyle, marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>🔍 Search & Filters</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>Search by name</label>
            <input
              type="text"
              placeholder="Search meals or workouts..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              style={{ 
                padding: '10px', 
                borderRadius: '8px', 
                border: isDark ? '1px solid #444' : '1px solid #ddd',
                background: isDark ? '#0f3460' : '#fff',
                color: isDark ? '#eee' : '#333',
                width: '100%'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>From Date</label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              style={{ 
                padding: '10px', 
                borderRadius: '8px', 
                border: isDark ? '1px solid #444' : '1px solid #ddd',
                background: isDark ? '#0f3460' : '#fff',
                color: isDark ? '#eee' : '#333',
                width: '100%'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: '500' }}>To Date</label>
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              style={{ 
                padding: '10px', 
                borderRadius: '8px', 
                border: isDark ? '1px solid #444' : '1px solid #ddd',
                background: isDark ? '#0f3460' : '#fff',
                color: isDark ? '#eee' : '#333',
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            🍽️ Meals
            <span style={{ 
              background: '#2ecc71', 
              color: 'white', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {mealList.length}
            </span>
          </h2>
          <MealForm 
            onSuccess={loadData} 
            isDark={isDark} 
            suggestions={mealSuggestions}
            showSuggestions={showMealSuggestions}
            setShowSuggestions={setShowMealSuggestions}
          />
          <ItemList items={mealList} type="meal" isDark={isDark} onDelete={async (id) => {
            await meals.delete(id);
            loadData();
          }} onEdit={async (id, data) => {
            await meals.update(id, data);
            loadData();
          }} />
        </div>
        
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            💪 Workouts
            <span style={{ 
              background: '#3498db', 
              color: 'white', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {workoutList.length}
            </span>
          </h2>
          <WorkoutForm 
            onSuccess={loadData} 
            isDark={isDark}
            suggestions={workoutSuggestions}
            showSuggestions={showWorkoutSuggestions}
            setShowSuggestions={setShowWorkoutSuggestions}
          />
          <ItemList items={workoutList} type="workout" isDark={isDark} onDelete={async (id) => {
            await workouts.delete(id);
            loadData();
          }} onEdit={async (id, data) => {
            await workouts.update(id, data);
            loadData();
          }} />
        </div>
      </div>
    </div>
  );
}
