import { useState } from 'react';

export default function ItemList({ items, type, isDark, onDelete, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const startEdit = (item) => {
    setEditId(item._id);
    setEditForm(item);
  };

  const saveEdit = () => {
    onEdit(editId, editForm);
    setEditId(null);
  };

  const getTypeBadge = (workoutType) => {
    const colors = {
      'Cardio': '#e74c3c',
      'Strength': '#9b59b6',
      'Flexibility': '#3498db',
      'Sports': '#f39c12'
    };
    return { background: colors[workoutType] || '#95a5a6', color: 'white' };
  };

  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
      {items.length === 0 && <p style={{ textAlign: 'center', color: '#7f8c8d', padding: '30px' }}>No items yet</p>}
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: isDark ? '2px solid #444' : '2px solid #ddd' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>
              {type === 'meal' ? 'Meal' : 'Exercise'}
            </th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Details</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Date</th>
            <th style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '600' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id} style={{ 
              borderBottom: isDark ? '1px solid #333' : '1px solid #eee',
              transition: 'background 0.2s'
            }}>
              {editId === item._id ? (
                <td colSpan="4" style={{ padding: '15px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      value={editForm[type === 'meal' ? 'name' : 'exercise']}
                      onChange={(e) => setEditForm({ ...editForm, [type === 'meal' ? 'name' : 'exercise']: e.target.value })}
                      style={{ 
                        flex: 1, 
                        padding: '8px', 
                        borderRadius: '6px', 
                        border: isDark ? '1px solid #444' : '1px solid #ddd',
                        background: isDark ? '#0f3460' : '#fff',
                        color: isDark ? '#eee' : '#333'
                      }}
                    />
                    <input
                      type="number"
                      value={editForm[type === 'meal' ? 'calories' : 'duration']}
                      onChange={(e) => setEditForm({ ...editForm, [type === 'meal' ? 'calories' : 'duration']: parseInt(e.target.value) })}
                      style={{ 
                        width: '100px', 
                        padding: '8px', 
                        borderRadius: '6px', 
                        border: isDark ? '1px solid #444' : '1px solid #ddd',
                        background: isDark ? '#0f3460' : '#fff',
                        color: isDark ? '#eee' : '#333'
                      }}
                    />
                    <button onClick={saveEdit} style={{ padding: '8px 16px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Save</button>
                    <button onClick={() => setEditId(null)} style={{ padding: '8px 16px', background: '#95a5a6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </td>
              ) : (
                <>
                  <td style={{ padding: '15px', fontWeight: '600' }}>
                    {type === 'meal' ? item.name : item.exercise}
                  </td>
                  <td style={{ padding: '15px' }}>
                    {type === 'meal' ? (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ background: '#e74c3c', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                          {item.calories} cal
                        </span>
                        <span style={{ background: '#9b59b6', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
                          P: {item.protein || 0}g
                        </span>
                        <span style={{ background: '#f39c12', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
                          C: {item.carbs || 0}g
                        </span>
                        <span style={{ background: '#3498db', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
                          F: {item.fats || 0}g
                        </span>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ background: '#3498db', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                          {item.duration} min
                        </span>
                        <span style={{ background: '#e74c3c', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
                          {item.caloriesBurned || 0} cal
                        </span>
                        {item.type && (
                          <span style={{ ...getTypeBadge(item.type), padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
                            {item.type}
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '15px', fontSize: '13px', color: '#7f8c8d' }}>
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right' }}>
                    <button onClick={() => startEdit(item)} style={{ 
                      padding: '6px 12px', 
                      marginRight: '8px', 
                      background: '#3498db', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '6px', 
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}>
                      ✏️ Edit
                    </button>
                    <button onClick={() => onDelete(item._id)} style={{ 
                      padding: '6px 12px', 
                      background: '#e74c3c', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '6px', 
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}>
                      🗑️ Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
