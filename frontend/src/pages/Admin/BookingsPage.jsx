import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { fetchBookings } from "../../api/adminApi";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchBookings();
        setBookings(res.data.bookings || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
        <div className="overflow-auto bg-white rounded shadow">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-2">User</th>
                <th className="p-2">Mobile</th>
                <th className="p-2">Slot</th>
                <th className="p-2">Employee</th>
                {/* <th className="p-2">Date</th> */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{b.userId?.username ?? b.username}</td>
                  <td className="p-2">{b.mobileNumber}</td>
                  <td className="p-2">{b.slot}</td>
                  <td className="p-2">{b.employe}</td>
                  {/* <td className="p-2">{b.date || new Date(b.createdAt).toLocaleString()}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
