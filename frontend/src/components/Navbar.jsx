
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    alert('Logged out successfully');
    navigate('/signin');
    setIsMenuOpen(false); // Close the menu on logout
    
    

  };

  const handleBookNow = () => {
    navigate('/contact');
    setIsMenuOpen(false); // Close the menu on navigation
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img src={logo} className="w-12 md:w-16 rounded-full" alt="Logo" />
        <h1 className="text-orange-200 text-lg md:text-2xl">Radiance Room</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-9 text-lg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li>
          <button
            onClick={handleBookNow}
            className="hover:bg-blue-600 text-white font-medium py-1 px-4 rounded"
          >
            Appointment
          </button>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="text-red-500">Logout</button>
          </li>
        ) : (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>

      {/* Hamburger Menu Button for Small Screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <ul className="absolute top-16 right-4 bg-black text-white flex flex-col space-y-4 p-4 rounded-lg shadow-md z-50">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/Services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
          <li>
            <button
              onClick={() => { toggleMenu(); handleBookNow(); }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-4 rounded"
            >
              Appointment
            </button>
          </li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={() => { toggleMenu(); handleLogout(); }}
                className="text-red-500"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/signin" onClick={toggleMenu}>Sign In</Link></li>
              <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
