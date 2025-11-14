// createAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs" // path adjust if needed
import User from "./src/models/user.model.js";

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    const email = process.env.ADMIN_EMAIL;        // <-- change to your admin email
    const username = "admin";
    const plainPassword = process.env.ADMIN_PASSWORD; // <-- change to a strong password

    // check if already exists
    const exists = await User.findOne({ email });
    if (exists) {
      console.log("Admin already exists:", exists._id.toString());
      process.exit(0);
    }

    const hashed = await bcrypt.hash(plainPassword, 10);
    const admin = await User.create({
      username,
      email,
      password: hashed,
      // no role field — we won't use it
    });

    console.log("Admin created:", admin._id.toString());
    console.log("Admin email:", email);
    process.exit(0);
  } catch (err) {
    console.error("Create admin error:", err);
    process.exit(1);
  }
};

run();
