import axios from "axios";

const API_BASE ='https://r-r-salon-website.onrender.com/api/v1/admin'
// const API_BASE ='http://localhost:5000/api/v1'
const base = API_BASE.replace(/\/$/, ""); // ensure no trailing slash
const API = axios.create({
  baseURL: `${base}/admin`,
  timeout: 15000,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fetchBookings = () => API.get("/bookings");
export const fetchFeedbacks = () => API.get("/feedbacks");
export const fetchUsers = () => API.get("/users");
export default API;
