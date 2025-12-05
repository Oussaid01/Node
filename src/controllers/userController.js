import User from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export async function createUser(req,res){
    try{
        const {userName, passwd} = req.body
        const hashPasswd = await bcrypt.hash(passwd,10)
        const newUser = new User({userName, passwd:hashPasswd})

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(error){
        console.error("Error in createUser controller",error)
        res.status(500).json({message : "Internal server error"})
    }
}



export async function loginInUser(req,res){
    try {
        const { userName, passwd } = req.body;
    
        // Check user
        const user = await User.findOne({ userName });
        if (!user) return res.status(400).json({message: "User not found"});
    
        // Compare password with hash
        const isMatch = await bcrypt.compare(passwd, user.passwd);
        if (!isMatch) return res.status(400).json({message: "Wrong password"});
    
        // Create token
        const token = jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
    
        res.json({message: "Logged in", token});
      } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error"});
      }
}