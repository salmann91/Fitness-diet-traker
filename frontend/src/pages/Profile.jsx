import { useState, useEffect } from 'react';
import { users } from '../services/api';

export default function Profile() {
  const [profile, setProfile] = useState({ 
    name: '', age: '', weight: '', height: '', goal: '',
    dailyCalorieGoal: '', dailyProteinGoal: '', dailyCarbsGoal: '', dailyFatsGoal: ''
  });

  useEffect(() => {
    users.getProfile().then(setProfile);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await users.updateProfile(profile);
    setProfile(updated);
    alert('Profile updated!');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <div style={{ background: 'white', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', padding: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px' }}>👤 User Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={profile.name || ''}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <input
              type="number"
              placeholder="Age"
              value={profile.age || ''}
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={profile.weight || ''}
              onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          <input
            type="number"
            placeholder="Height (cm)"
            value={profile.height || ''}
            onChange={(e) => setProfile({ ...profile, height: e.target.value })}
            style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
          />
          <input
            type="text"
            placeholder="Fitness Goal"
            value={profile.goal || ''}
            onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
            style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
          />
          
          <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '20px' }}>🎯 Daily Goals</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <input
              type="number"
              placeholder="Calorie Goal"
              value={profile.dailyCalorieGoal || ''}
              onChange={(e) => setProfile({ ...profile, dailyCalorieGoal: e.target.value })}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
            />
            <input
              type="number"
              placeholder="Protein Goal (g)"
              value={profile.dailyProteinGoal || ''}
              onChange={(e) => setProfile({ ...profile, dailyProteinGoal: e.target.value })}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
            />
            <input
              type="number"
              placeholder="Carbs Goal (g)"
              value={profile.dailyCarbsGoal || ''}
              onChange={(e) => setProfile({ ...profile, dailyCarbsGoal: e.target.value })}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
            />
            <input
              type="number"
              placeholder="Fats Goal (g)"
              value={profile.dailyFatsGoal || ''}
              onChange={(e) => setProfile({ ...profile, dailyFatsGoal: e.target.value })}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          
          <button type="submit" style={{ width: '100%', padding: '14px', marginTop: '20px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            💾 Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
