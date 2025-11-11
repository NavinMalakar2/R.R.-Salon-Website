
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// Custom Hook to access the auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to provide auth context to the app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for token immediately when the app loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists, the user is logged in
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token); // Store token in localStorage
    setIsLoggedIn(true); // Set login state to true
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Set login state to false
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
