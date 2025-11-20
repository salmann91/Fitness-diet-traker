import { useState } from 'react';
import { workouts } from '../services/api';

export default function WorkoutForm({ onSuccess, isDark, suggestions, showSuggestions, setShowSuggestions }) {
  const [form, setForm] = useState({ exercise: '', duration: '', caloriesBurned: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      exercise: form.exercise,
      duration: parseInt(form.duration),
      caloriesBurned: form.caloriesBurned ? parseInt(form.caloriesBurned) : 0,
      type: form.type
    };
    await workouts.create(data);
    setForm({ exercise: '', duration: '', caloriesBurned: '', type: '' });
    setShowSuggestions(false);
    onSuccess();
  };

  const selectSuggestion = (suggestion) => {
    setForm({ ...form, exercise: suggestion });
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(form.exercise.toLowerCase())
  );

  const inputStyle = {
    padding: '10px',
    borderRadius: '8px',
    border: isDark ? '1px solid #444' : '1px solid #ddd',
    background: isDark ? '#0f3460' : '#f8f9fa',
    color: isDark ? '#eee' : '#333',
    width: '100%'
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '25px', position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Exercise name (e.g., Running)"
          value={form.exercise}
          onChange={(e) => setForm({ ...form, exercise: e.target.value })}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          required
          style={{ ...inputStyle, marginBottom: '10px' }}
        />
        {showSuggestions && form.exercise && filteredSuggestions.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: isDark ? '#0f3460' : 'white',
            border: isDark ? '1px solid #444' : '1px solid #ddd',
            borderRadius: '8px',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            {filteredSuggestions.map((suggestion, idx) => (
              <div
                key={idx}
                onClick={() => selectSuggestion(suggestion)}
                style={{
                  padding: '10px 15px',
                  cursor: 'pointer',
                  borderBottom: isDark ? '1px solid #333' : '1px solid #eee',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = isDark ? '#16213e' : '#f0f2f5'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                💪 {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Duration (min)"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          required
          min="0"
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Calories"
          value={form.caloriesBurned}
          onChange={(e) => setForm({ ...form, caloriesBurned: e.target.value })}
          min="0"
          style={inputStyle}
        />
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          style={inputStyle}
        >
          <option value="">Type</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <button type="submit" style={{ 
        width: '100%', 
        padding: '12px', 
        background: 'linear-gradient(135deg, #3498db, #2980b9)', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px', 
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        ➕ Add Workout
      </button>
    </form>
  );
}
