import bcrypt from 'bcryptjs';
 import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';
import dotenv from "dotenv"
dotenv.config();

// ragistration 
export const ragistration = async (req,res)=>{
    
    try {
        const {username, email, password}= req.body;
        // console.log(username, email, password);
        if(!username || !email || !password){
            return res.status(400).json({message:'somting is missing',success:true});
        }
        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({message:'User already exists try with diffrent mail /LOGIN ',success:false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            username,
            email,
            password: hashedPassword
        })
        return res.status(200).json({message:'Account created successfully',success:true});
    } catch (error) {
        console.log("error creating account")
    }

    }

    
export const login = async (req, res) => {
  try {
    console.log("Incoming login body:", req.body);
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email", success: false });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password", success: false });

    const payload = { _id: user._id.toString() };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    // 👇 Ye log daal ke dekh
    console.log("User email:", user.email);
    console.log("Admin email from env:", process.env.ADMIN_EMAIL);
    console.log("Admin ID from env:", process.env.ADMIN_ID);
    console.log("User ID:", user._id.toString());

    const isAdmin =
      user.email === process.env.ADMIN_EMAIL ||
      user._id.toString() === process.env.ADMIN_ID;
      console.log("Admin check:", process.env.ADMIN_EMAIL, "==", email, "=>", isAdmin);


    console.log("isAdmin check result:", isAdmin);

    return res.status(200).json({
      message: isAdmin ? "Admin logged in successfully" : "User logged in successfully",
      success: true,
      token,
      isAdmin,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};




    // logout
    // Logout handler in the server (Express route)
export const logout = async (req, res) => {
    try {
      res.cookie('token', '', { maxAge: 0, httpOnly: true }); // Clear the token cookie
      return res.status(200).json({ message: 'Logged out successfully', success: true });
    } catch (error) {
      console.log('Error logging out:', error);
      return res.status(500).json({ message: 'Error logging out', success: false });
    }
  };
    

