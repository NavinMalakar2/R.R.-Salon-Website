import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => (
  <aside className="w-64 bg-gradient-to-b from-blue-700 to-indigo-700 text-white min-h-screen p-6">
    <h3 className="text-xl font-bold mb-6">Salon Admin</h3>
    <nav className="flex flex-col gap-3">
      <Link to="/admin/dashboard" className="hover:text-yellow-300">Dashboard</Link>
      <Link to="/admin/bookings" className="hover:text-yellow-300">Bookings</Link>
      <Link to="/admin/users" className="hover:text-yellow-300">Users</Link>
      <Link to="/admin/feedbacks" className="hover:text-yellow-300">Feedbacks</Link>
    </nav>
  </aside>
);

export default AdminSidebar;
