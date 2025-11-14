import React from "react";

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
  </div>
);

export default StatCard;
