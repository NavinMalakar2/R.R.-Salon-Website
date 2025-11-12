import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE } from '../api';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // const response = await axios.post('http://localhost:4000/api/v1/user/login', formData);
      const response = await axios.post(`${API_BASE}/user/login`, formData, {
        withCredentials: true, // needed if you're using cookies/session
      });
      if (response.data.success) {
        // Store token in localStorage for session management
        localStorage.setItem('token', response.data.token);
        alert(response.data.message); // Show success message
        navigate('/'); // Redirect to the homepage
       // Refresh the current page
        location.reload();
       

      } else {
        setError(response.data.message); // Display error message
      }
    } catch (error) {
      setError('An error occurred. Please try again.'); // Generic error message
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign In to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
    
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup') }
              className="text-blue-500 hover:underline font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


