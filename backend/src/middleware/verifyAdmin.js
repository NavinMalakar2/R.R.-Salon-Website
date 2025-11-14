// // verifyAdmin.js
// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";
// import dotenv from "dotenv"
// dotenv.config();

// export const verifyAdmin = async (req, res, next) => {
//   try {
//     const auth = req.headers.authorization;
//     if (!auth || !auth.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "No token provided", success: false });
//     }
//     const token = auth.split(" ")[1];
//     let decoded;
//     try {
//       decoded = jwt.verify(token, process.env.JWT_SECRET);
//     } catch (err) {
//       return res.status(401).json({ message: "Invalid token", success: false });
//     }

//     // If ADMIN_ID is set in env, compare
//     if (!process.env.ADMIN_ID) {
//       return res.status(500).json({ message: "ADMIN_ID not configured on server", success: false });
//     }

//     if (decoded.userid !== process.env.ADMIN_ID) {
//       return res.status(403).json({ message: "Access denied", success: false });
//     }

//     // optionally attach user object
//     const user = await User.findById(decoded.userid).select("-password");
//     req.user = user;
//     next();
//   } catch (err) {
//     console.error("verifyAdmin error:", err);
//     return res.status(500).json({ message: "Server error", success: false });
//   }
// };
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv"
dotenv.config();

export const verifyAdmin = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided", success: false });
    }

    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User fetch karo
    const user = await User.findById(decoded.userid).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    // Admin email check
    if (user.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied: not admin", success: false });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("verifyAdmin error:", err);
    return res.status(500).json({ message: "Server error", success: false });
  }
};
