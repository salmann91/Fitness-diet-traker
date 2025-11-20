import { useState } from 'react';
import { meals } from '../services/api';

export default function MealForm({ onSuccess, isDark, suggestions, showSuggestions, setShowSuggestions }) {
  const [form, setForm] = useState({ name: '', calories: '', protein: '', carbs: '', fats: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: form.name,
      calories: parseInt(form.calories),
      protein: form.protein ? parseInt(form.protein) : 0,
      carbs: form.carbs ? parseInt(form.carbs) : 0,
      fats: form.fats ? parseInt(form.fats) : 0
    };
    await meals.create(data);
    setForm({ name: '', calories: '', protein: '', carbs: '', fats: '' });
    setShowSuggestions(false);
    onSuccess();
  };

  const selectSuggestion = (suggestion) => {
    setForm({ ...form, name: suggestion });
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(form.name.toLowerCase())
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
          placeholder="Meal name (e.g., Chicken Salad)"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          required
          style={{ ...inputStyle, marginBottom: '10px' }}
        />
        {showSuggestions && form.name && filteredSuggestions.length > 0 && (
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
                🍽️ {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Calories"
          value={form.calories}
          onChange={(e) => setForm({ ...form, calories: e.target.value })}
          required
          min="0"
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Protein"
          value={form.protein}
          onChange={(e) => setForm({ ...form, protein: e.target.value })}
          min="0"
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Carbs"
          value={form.carbs}
          onChange={(e) => setForm({ ...form, carbs: e.target.value })}
          min="0"
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Fats"
          value={form.fats}
          onChange={(e) => setForm({ ...form, fats: e.target.value })}
          min="0"
          style={inputStyle}
        />
      </div>
      <button type="submit" style={{ 
        width: '100%', 
        padding: '12px', 
        background: 'linear-gradient(135deg, #2ecc71, #27ae60)', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px', 
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        ➕ Add Meal
      </button>
    </form>
  );
}
