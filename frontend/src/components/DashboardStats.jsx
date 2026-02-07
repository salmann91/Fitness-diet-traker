import { useEffect, useState } from 'react';

export default function DashboardStats({ meals, workouts, profile, isDark }) {
  const [stats, setStats] = useState({
    caloriesConsumed: 0,
    caloriesBurned: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    netCalories: 0
  });

  useEffect(() => {
    const today = new Date().toDateString();
    const todayMeals = meals.filter(m => new Date(m.date).toDateString() === today);
    const todayWorkouts = workouts.filter(w => new Date(w.date).toDateString() === today);

    const caloriesConsumed = todayMeals.reduce((sum, m) => sum + (m.calories || 0), 0);
    const caloriesBurned = todayWorkouts.reduce((sum, w) => sum + (w.caloriesBurned || 0), 0);
    const protein = todayMeals.reduce((sum, m) => sum + (m.protein || 0), 0);
    const carbs = todayMeals.reduce((sum, m) => sum + (m.carbs || 0), 0);
    const fats = todayMeals.reduce((sum, m) => sum + (m.fats || 0), 0);

    setStats({
      caloriesConsumed,
      caloriesBurned,
      protein,
      carbs,
      fats,
      netCalories: caloriesConsumed - caloriesBurned
    });
  }, [meals, workouts]);

  const calorieGoal = profile.dailyCalorieGoal || 2000;
  const proteinGoal = profile.dailyProteinGoal || 150;
  const carbsGoal = profile.dailyCarbsGoal || 250;
  const fatsGoal = profile.dailyFatsGoal || 65;

  const calorieProgress = Math.min((stats.caloriesConsumed / calorieGoal) * 100, 100);
  const proteinProgress = Math.min((stats.protein / proteinGoal) * 100, 100);
  const carbsProgress = Math.min((stats.carbs / carbsGoal) * 100, 100);
  const fatsProgress = Math.min((stats.fats / fatsGoal) * 100, 100);

  const ProgressBar = ({ label, current, goal, progress, color }) => (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontWeight: '600', fontSize: '14px' }}>{label}</span>
        <span style={{ fontSize: '14px', color: isDark ? '#aaa' : '#666' }}>
          {current} / {goal}
        </span>
      </div>
      <div style={{ 
        width: '100%', 
        height: '12px', 
        background: isDark ? '#0f3460' : '#e0e0e0', 
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${progress}%`, 
          height: '100%', 
          background: color,
          borderRadius: '10px',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );

  const StatCard = ({ icon, label, value, color, subtext }) => (
    <div style={{ 
      background: isDark ? '#0f3460' : '#f8f9fa',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      border: `2px solid ${color}20`
    }}>
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', color, marginBottom: '4px' }}>
        {value}
      </div>
      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{label}</div>
      {subtext && <div style={{ fontSize: '12px', color: isDark ? '#888' : '#999' }}>{subtext}</div>}
    </div>
  );

  return (
    <div>
      {/* Today's Summary */}
      <div style={{ 
        background: isDark ? '#16213e' : '#fff',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '20px',
        boxShadow: isDark ? '0 5px 20px rgba(0,0,0,0.5)' : '0 5px 20px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '22px' }}>📊 Today's Summary</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '15px',
          marginBottom: '30px'
        }}>
          <StatCard 
            icon="🔥" 
            label="Consumed" 
            value={stats.caloriesConsumed}
            color="#e74c3c"
            subtext="calories"
          />
          <StatCard 
            icon="💪" 
            label="Burned" 
            value={stats.caloriesBurned}
            color="#2ecc71"
            subtext="calories"
          />
          <StatCard 
            icon="📈" 
            label="Net" 
            value={stats.netCalories}
            color={stats.netCalories > 0 ? '#f39c12' : '#3498db'}
            subtext="calories"
          />
          <StatCard 
            icon="🎯" 
            label="Remaining" 
            value={Math.max(0, calorieGoal - stats.caloriesConsumed)}
            color="#9b59b6"
            subtext="calories"
          />
        </div>

        <h3 style={{ marginBottom: '15px', fontSize: '18px' }}>🎯 Daily Goals Progress</h3>
        
        <ProgressBar 
          label="Calories"
          current={stats.caloriesConsumed}
          goal={calorieGoal}
          progress={calorieProgress}
          color="linear-gradient(90deg, #e74c3c, #c0392b)"
        />
        
        <ProgressBar 
          label="Protein"
          current={stats.protein}
          goal={proteinGoal}
          progress={proteinProgress}
          color="linear-gradient(90deg, #9b59b6, #8e44ad)"
        />
        
        <ProgressBar 
          label="Carbs"
          current={stats.carbs}
          goal={carbsGoal}
          progress={carbsProgress}
          color="linear-gradient(90deg, #f39c12, #e67e22)"
        />
        
        <ProgressBar 
          label="Fats"
          current={stats.fats}
          goal={fatsGoal}
          progress={fatsProgress}
          color="linear-gradient(90deg, #3498db, #2980b9)"
        />
      </div>
    </div>
  );
}
