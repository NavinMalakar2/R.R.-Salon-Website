import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { fetchUsers } from "../../api/adminApi.js";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchUsers();
        setUsers(res.data.users || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <div className="bg-white rounded shadow">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-2">Username</th>
                <th className="p-2">Email</th>
                <th className="p-2">Bookings</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{u.username}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">{u.bookingCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
