import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization) return res.status(400).json({ success: false, message: "Authorization not provided"});
    const token = authorization.split(" ")[1]
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = { id }
        next()
    } catch(e) {
        return res.status(500).json({ success: false, message:`Server Error:${e.message}`})
    }
}


export default authMiddleware