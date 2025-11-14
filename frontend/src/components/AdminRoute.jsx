import React from "react";
import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const token = localStorage.getItem("token");
  if (!token || !isAdmin) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default AdminRoute;
