import { useState, useEffect } from 'react';
import { users } from '../services/api';

export default function Profile() {
  const [profile, setProfile] = useState({ name: '', age: '', weight: '', height: '', goal: '' });

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
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="number"
          placeholder="Age"
          value={profile.age}
          onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={profile.weight}
          onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={profile.height}
          onChange={(e) => setProfile({ ...profile, height: e.target.value })}
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="text"
          placeholder="Goal"
          value={profile.goal}
          onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Update Profile</button>
      </form>
    </div>
  );
}
