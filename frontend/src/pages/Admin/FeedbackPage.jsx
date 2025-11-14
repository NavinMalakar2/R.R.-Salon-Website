import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { fetchFeedbacks } from "../../api/adminApi";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchFeedbacks();
        setFeedbacks(res.data.feedbacks || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Feedbacks</h2>
        <div className="bg-white rounded shadow p-4">
          {feedbacks.map((f) => (
            <div key={f._id} className="border-b py-3">
              <div className="font-semibold">{f.userId?.username ?? f.username}</div>
              <div className="text-sm text-gray-600">{f.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
