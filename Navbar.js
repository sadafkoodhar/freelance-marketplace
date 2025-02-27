import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">FreelanceHub</Link>
      </div>
      <div className="nav-links">
        <Link to="/projects">Browse Projects</Link>
        {isLoggedIn ? (
          <>
            <Link to="/create-project">Post Project</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/';
            }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 