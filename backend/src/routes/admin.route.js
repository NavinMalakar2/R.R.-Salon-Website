import express from "express";
import UserBooking from "../models/booking.model.js";
import Feedback from "../models/feedback.model.js";
import User from "../models/user.model.js";
import dotenv from "dotenv"
dotenv.config();

import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// bookings
router.get("/bookings",verifyToken, verifyAdmin, async (req, res) => {
  try {
    const bookings = await UserBooking.find().populate("userId", "username email");
    res.json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

// feedback
router.get("/feedbacks",verifyToken, verifyAdmin, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("userId", "username email");
    res.json({ success: true, feedbacks });
  } catch (err) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
});

// user booking count
router.get("/users",verifyToken, verifyAdmin, async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $lookup: {
          from: "bookings",
          localField: "_id",
          foreignField: "userId",
          as: "bookings",
        },
      },
      {
        $project: {
          username: 1,
          email: 1,
          bookingCount: { $size: "$bookings" },
        },
      },
    ]);
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

export default router;
