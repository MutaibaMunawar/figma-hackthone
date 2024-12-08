
import React from 'react';

const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center' }}>
        <img src="/nike-logo.png" alt="Nike Logo" style={{ width: '50px', margin: '0 auto' }} />
        <h2>Your Account for Everything Nike</h2>
        <form>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
              required 
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
              required 
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label>
              <input type="checkbox" style={{ marginRight: '5px' }} />
              Keep me signed in
            </label>
          </div>
          <button 
            type="submit" 
            style={{ width: '100%', padding: '10px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Sign In
          </button>
        </form>
        <p style={{ marginTop: '15px' }}>
          <a href="#" style={{ color: '#0070f3', textDecoration: 'none' }}>Join Us</a>
        </p>
      </div>
    </div>
  );
};

export default Login;