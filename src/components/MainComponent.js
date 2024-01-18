import React from 'react';
import { Button } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage'; 

const MainContent = () => {
  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 style={{ textAlign: 'center', fontSize: '60px' }}>Welcome to Our EasyBank Services</h1>
        <p>Your trusted partner in resolving financial issues efficiently.</p>
      </div>

      {/* Complaint Registration Section */}
      <div className="complaint-registration-section">
        <h2 style={{ textAlign: 'center', fontSize: '40px', paddingTop: '60px' }}>Need to Raise a Concern?</h2>
        <p>Your feedback is important to us. Register your complaint here.</p>

        <Routes>
            <Route path="login" element={<LoginPage />} />
          </Routes>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Register Complaint
            </Button>
          </Link>
      </div>
    </div>
  );
};

export default MainContent;
