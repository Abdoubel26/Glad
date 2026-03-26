import users from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export const signup = async (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) return res.status(400).json({ success: false, message: "Missing required fields"});
    try {
        const foundUser = await users.findOne({email: email})
        if(foundUser) return res.status(400).json({ success: false, message: "email already registered"});
        const hash = await bcrypt.hash(password, 10)
        const newUser = new users({name: name, email: email, password: hash})
        await newUser.save()
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "2d"} )
        const {password: _, ...safeUser} = newUser.toObject()
        return res.status(201).json({ success: true, message: "Signed up successfully", token: token, user: safeUser})
    } catch(e) {
        return res.status(500).json({ success: false, message:`Server Error: ${e.message}`})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) return res.status(400).json({ success:true, message:"Missing required fields"});
    try {
        const foundUser = await users.find({email: email})
        if(!foundUser) return res.status(404).json({ success: false, message: "Email not registered"});
        const isMatch = bcrypt.compare(password, foundUser.password)
        if(!isMatch) return res.status(401).json({ success: false, message: "wrong email or password"});
        const token = jwt.sign({id: foundUser._id}, process.env.JWT_SECRET, {expiresIn: "2d"})
        const { password: _, ...safeUser} = foundUser
        return res.status(200).json({ success: true, message:`Logged in successfully`, token: token, user: safeUser})
    } catch(e) {
        return res.status(500).json({ success: false, message:`Server Error:${e.message}`})
    }
}
