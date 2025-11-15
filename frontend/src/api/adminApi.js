
import axios from "axios";
// const API_BASE ='https://r-r-salon-website.onrender.com/api/v1'
const adminApi = axios.create({
  baseURL: "https://r-r-salon-website.onrender.com/api/v1/admin",
});

// Add token before every request
adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("ADMIN API TOKEN:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const fetchBookings = () => adminApi.get("/bookings");
export const fetchFeedbacks = () => adminApi.get("/feedbacks");
export const fetchUsers = () => adminApi.get("/users");

export default adminApi;
