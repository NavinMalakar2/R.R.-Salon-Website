import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import StatCard from "../../components/StatCard";
import { fetchBookings, fetchFeedbacks, fetchUsers } from "../../api/adminApi";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ bookings: 0, users: 0, feedbacks: 0 });

  useEffect(() => {
    const load = async () => {
      try {
        const [b, f, u] = await Promise.all([fetchBookings(), fetchFeedbacks(), fetchUsers()]);
        setStats({
          bookings: b.data.bookings?.length ?? 0,
          feedbacks: f.data.feedbacks?.length ?? 0,
          users: u.data.users?.length ?? 0,
        });
      } catch (err) {
        console.error("Admin stats error", err);
      }
    };
    load();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatCard title="Total Bookings" value={stats.bookings} />
          <StatCard title="Total Users" value={stats.users} />
          <StatCard title="Feedbacks" value={stats.feedbacks} />
        </div>

        {/* quick tables or charts placeholders */}
        <div className="bg-white p-4 rounded shadow">Quick overview and charts can go here.</div>
      </main>
    </div>
  );
};

export default AdminDashboard;
