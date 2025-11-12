import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE } from '../api';


const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ username: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // Dynamically update state using e.target.name
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error message
    setError(null);

    if (!feedback.username || !feedback.message) {
      setError('Please provide both your name and a message.');
      return;
    }

    try {
      setLoading(true);
      console.log('Feedback Data:', feedback);  // Check the data being sent

      const response = await axios.post('https://r-r-salon-website.onrender.com/api/v1/user/feedback', feedback,{withCredentials:true,});

      if (response.status === 201) {
        alert('Thank you for your feedback!');
        setFeedback({ username: '', message: '' }); // Reset form
      }
    } catch (error) {
      // Log the complete error response
      console.error('Error response:', error.response);  // Detailed error from the backend
      setError(error.response?.data?.message || error.response?.data?.error || 'An error occurred while sending feedback.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
          <input
            type="text"
            name="username"  // The name property should be 'username'
            placeholder="Enter your name"
            value={feedback.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
          <textarea
            name="message"  // The name property should be 'message'
            placeholder="Write your feedback"
            value={feedback.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
