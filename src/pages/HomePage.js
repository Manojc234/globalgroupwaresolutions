import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  
  return (
    <div className="container text-center">
      <div className="card homepage-card">
        <h1 className="card-title mt-3">Welcome to the Homepage</h1>
        <div className="card-body">
          <button
            className="btn btn-success mt-3"
            onClick={() => navigate('/userslist')}
          >
            Go to Users List
          </button>
          <br />
          <button className="btn btn-danger mt-3" onClick={logout}>
            Logout
          </button>
        
        </div>
      </div>
    </div>
  );
}
