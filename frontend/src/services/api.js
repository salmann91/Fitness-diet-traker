
const API_URL = 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

const authHeader = () => ({ Authorization: `Bearer ${getToken()}` });

export const auth = {
  register: (data) => fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  
  login: (data) => fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json())
};

export const meals = {
  getAll: (params = {}) => {
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== '' && v != null)
    );
    const query = new URLSearchParams(cleanParams).toString();
    return fetch(`${API_URL}/meals${query ? '?' + query : ''}`, {
      headers: authHeader()
    }).then(r => r.json());
  },
  
  create: (data) => fetch(`${API_URL}/meals`, {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  
  update: (id, data) => fetch(`${API_URL}/meals/${id}`, {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  
  delete: (id) => fetch(`${API_URL}/meals/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  }).then(r => r.json())
};

export const workouts = {
  getAll: (params = {}) => {
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== '' && v != null)
    );
    const query = new URLSearchParams(cleanParams).toString();
    return fetch(`${API_URL}/workouts${query ? '?' + query : ''}`, {
      headers: authHeader()
    }).then(r => r.json());
  },
  
  create: (data) => fetch(`${API_URL}/workouts`, {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  
  update: (id, data) => fetch(`${API_URL}/workouts/${id}`, {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  
  delete: (id) => fetch(`${API_URL}/workouts/${id}`, {
    method: 'DELETE',
    headers: authHeader()
  }).then(r => r.json())
};

export const users = {
  getProfile: () => fetch(`${API_URL}/users/profile`, {
    headers: authHeader()
  }).then(r => r.json()),
  
  updateProfile: (data) => fetch(`${API_URL}/users/profile`, {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json())
};
