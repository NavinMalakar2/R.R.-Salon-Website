

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); // Get login state from context
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('You must be logged in to access this page!');
      navigate('/signin'); // Redirect to login page if not logged in
    }
  }, [isLoggedIn, navigate]);

  return <>{isLoggedIn ? children : null}</>; // Render children only if logged in
};

export default ProtectedRoute;
