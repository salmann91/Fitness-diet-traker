import { useState, useEffect } from 'react';

export default function WeeklyProgress({ meals, workouts }) {
  const [stats, setStats] = useState({ totalCaloriesIn: 0, totalCaloriesOut: 0, workoutCount: 0, mealCount: 0 });

  useEffect(() => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const weeklyMeals = meals.filter(m => new Date(m.date) >= weekAgo);
    const weeklyWorkouts = workouts.filter(w => new Date(w.date) >= weekAgo);

    const totalCaloriesIn = weeklyMeals.reduce((sum, m) => sum + (m.calories || 0), 0);
    const totalCaloriesOut = weeklyWorkouts.reduce((sum, w) => sum + (w.caloriesBurned || 0), 0);

    setStats({
      totalCaloriesIn,
      totalCaloriesOut,
      workoutCount: weeklyWorkouts.length,
      mealCount: weeklyMeals.length
    });
  }, [meals, workouts]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">📈 Weekly Progress (Last 7 Days)</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-red-600">
            {stats.totalCaloriesIn}
          </div>
          <div className="text-sm font-semibold">Calories Consumed</div>
          <div className="text-xs text-gray-500">{stats.mealCount} meals</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-green-600">
            {stats.totalCaloriesOut}
          </div>
          <div className="text-sm font-semibold">Calories Burned</div>
          <div className="text-xs text-gray-500">{stats.workoutCount} workouts</div>
        </div>
      </div>
      <div className={`p-3 rounded-lg text-center font-semibold ${
        stats.totalCaloriesIn > stats.totalCaloriesOut ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
      }`}>
        Net: {stats.totalCaloriesIn - stats.totalCaloriesOut} calories
      </div>
    </div>
  );
}
