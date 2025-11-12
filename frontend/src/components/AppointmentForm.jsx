import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios to make API requests
import { API_BASE } from "../api";
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    dateTime: "",
    teamMember: "",
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const teamMembers = [
    { name: "Shahid Kapoor", role: "Hair Stylist" },
    { name: "Anuska Sen", role: "Makeup Artist" },
    { name: "Ranveer Singh", role: "Nail Technician" },
  ];

  useEffect(() => {
    generateAvailableSlots();
  }, []);

 
  const generateAvailableSlots = () => {
    const slots = [];
    const now = new Date(); // current datetime
    const today = new Date(now.setHours(0, 0, 0, 0));
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const days = [today, tomorrow];

    days.forEach((day) => {
      for (let hour = 9; hour <= 18; hour++) {
        const slotTime = new Date(day);
        slotTime.setHours(hour, 0, 0, 0); // exact hour

        // ✅ Only allow future time for today
        if (slotTime > new Date()) {
          slots.push({
            date: slotTime.toISOString().split("T")[0],
            time: `${hour.toString().padStart(2, "0")}:00`,
          });
        }
      }
    });

    setAvailableSlots(slots);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the booking data to send to the backend
    const bookingData = {
      username: formData.name,
      mobileNumber: formData.mobileNumber,
      slot: formData.dateTime,
      employe: formData.teamMember,
    };

    try {
      // Send the booking data to the backend using axios
      const response = await axios.post(
        'https://r-r-salon-website.onrender.com/api/v1/user/book',
        bookingData,{withCredentials:true,headers: {
      "Content-Type": "application/json",
    },}
      );

      if (response.status === 201) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          mobileNumber: "",
          dateTime: "",
          teamMember: "",
        }); // Reset form
      }
    } catch (error) {
      // Handle errors, such as when the slot is already booked
      alert(
        error.response?.data?.message ||
          "An error occurred while booking the appointment."
      );
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobileNumber"
            pattern="[0-9]{10}"
            inputMode="numeric"
            maxLength={10}
            placeholder="Enter your Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Preferred Date & Time
          </label>
          <select
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          >
            <option value="">Select a date & time</option>
            
            {availableSlots.map((slot, index) => (
              <option key={index} value={`${slot.date} ${slot.time}`}>
                {new Date(`${slot.date}T${slot.time}`).toLocaleString("en-IN", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Team Member
          </label>
          <select
            name="teamMember"
            value={formData.teamMember}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          >
            <option value="">Select a team member</option>
            {teamMembers.map((member, index) => (
              <option key={index} value={member.name}>
                {member.name} - {member.role}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
