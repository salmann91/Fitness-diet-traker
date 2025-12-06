import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <footer style={{
      background: isDark ? '#16213e' : '#fff',
      borderTop: isDark ? '1px solid #444' : '1px solid #e0e0e0',
      padding: '30px 20px',
      marginTop: '50px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginBottom: '20px'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{ marginBottom: '15px', fontSize: '18px', color: '#667eea' }}>
              💪 FitTracker
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: isDark ? '#aaa' : '#666' }}>
              Track your fitness journey with ease. Monitor meals, workouts, and achieve your health goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '15px', fontSize: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="/dashboard" style={{ color: isDark ? '#aaa' : '#666', textDecoration: 'none', fontSize: '14px' }}>
                  Dashboard
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/profile" style={{ color: isDark ? '#aaa' : '#666', textDecoration: 'none', fontSize: '14px' }}>
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ marginBottom: '15px', fontSize: '16px' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a 
                href="https://github.com/salmann91/Fitness-diet-traker" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: isDark ? '#aaa' : '#666', 
                  fontSize: '24px',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = isDark ? '#aaa' : '#666'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/mdsalman-ansari91" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: isDark ? '#aaa' : '#666', 
                  fontSize: '24px',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#0077b5'}
                onMouseLeave={(e) => e.target.style.color = isDark ? '#aaa' : '#666'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: isDark ? '1px solid #444' : '1px solid #e0e0e0',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <p style={{ fontSize: '14px', color: isDark ? '#aaa' : '#666', margin: 0 }}>
            © {new Date().getFullYear()} FitTracker. Built with ❤️ by <strong>MDsalmanAns</strong>
          </p>
          <p style={{ fontSize: '12px', color: isDark ? '#888' : '#999', margin: 0 }}>
            v1.0.0 | React + Node.js + MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}
