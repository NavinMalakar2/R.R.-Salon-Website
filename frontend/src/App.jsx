
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignIn from './components/Signin';
import SignUp from './components/SignUP';
import Footer from './components/Footer';
import { AuthProvider } from './components/AuthContext';
import AdminRoute from './components/AdminRoute.jsx';

// Admin pages
import AdminDashboard from './pages/Admin/AdminDashboard.jsx'
import BookingsPage from './pages/Admin/BookingsPage.jsx'
import FeedbackPage from './pages/Admin/FeedbackPage.jsx'
import UserPage from './pages/Admin/UsersPage.jsx'

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <AuthProvider>
      
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />

        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>} />
        <Route path="/admin/bookings" element={<AdminRoute><BookingsPage/></AdminRoute>} />
        <Route path="/admin/feedbacks" element={<AdminRoute><FeedbackPage/></AdminRoute>} />
        <Route path="/admin/users" element={<AdminRoute><UserPage/></AdminRoute>} />
      </Routes>

      {!isAdminRoute && <Footer />}

    </AuthProvider>
  );
}

export default App;
