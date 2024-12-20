import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Login from './pages/Login'; // Your Login component
import Homepage from './pages/HomePage'; // Your Homepage component
import UsersList from './pages/UsersList'; // Your Users List component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={ <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>} />
          <Route path="/userslist" element={<ProtectedRoute>
              <UsersList />
            </ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
