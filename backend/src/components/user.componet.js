import bcrypt from 'bcryptjs';
 import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

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

    // login
    export const login = async (req,res)=>{
        try {
            const {email,password}= req.body;
            if(!email ||!password){
                return res.status(400).json({message:'somting is missing',success:false});
            }
            let user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message:'invalid email',success:false});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({message:"invalid password",success:false});
            }
            const token =await jwt.sign({userid:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
            console.log(token);
            return res.status(200).json({message:'Logged in successfully',success:true, token});
            
        } catch (error) {
            console.log("error logging in")
        }
    }

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
    

