
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv"
dotenv.config();


export const verifyAdmin = (req, res, next) => {
  try {
    console.log("verifyAdmin → admin id:", req.admin?.id);

    if (!req.admin) {
      return res.status(401).json({ message: "No admin data found" });
    }

    // ADMIN CHECK BY EMAIL OR ID
    if (req.admin.email === process.env.ADMIN_EMAIL) {
      return next();
    }

    return res.status(403).json({ message: "Access denied: Admin only" });
  } catch (error) {
    return res.status(500).json({ message: "Admin check failed" });
  }
};

