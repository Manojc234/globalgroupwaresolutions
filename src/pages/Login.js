import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === validCredentials.email && password === validCredentials.password) {
      localStorage.setItem('token', 'dummy-token');
      navigate('/homepage');
    } else {
      alert('Invalid email or password!');
    }
  };

 

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="form-section">
          <h1 className="login-title">Welcome Back,</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img
                src={showPassword ? '/images/eye-open.png' : '/images/eye-closed.png'}
                alt="Toggle Password Visibility"
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <button type="submit" className="btn btn-primary login-btn">
              Login
            </button>
          </form>
        </div>
        <div className="image-section">
          <img src="/images/Lock.png" alt="Secure Lock" className="lock-image" />
        </div>
      </div>
    </div>
  );
}
