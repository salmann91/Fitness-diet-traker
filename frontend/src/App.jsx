import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}

function Nav() {
  const { user, logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  if (!user) return null;
  
  return (
    <nav style={{ 
      background: isDark ? '#16213e' : '#fff', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      padding: '15px 30px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>💪 FitTracker</div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link to="/dashboard" style={{ color: isDark ? '#eee' : '#333', textDecoration: 'none', fontWeight: '500' }}>Dashboard</Link>
          <Link to="/profile" style={{ color: isDark ? '#eee' : '#333', textDecoration: 'none', fontWeight: '500' }}>Profile</Link>
          
          <button onClick={toggleTheme} style={{ 
            padding: '8px 12px', 
            background: isDark ? '#f39c12' : '#34495e', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            {isDark ? '☀️' : '🌙'}
          </button>
          
          <button onClick={logout} style={{ 
            padding: '8px 16px', 
            background: '#e74c3c', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
