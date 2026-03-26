import { toggleLike } from "../controllers/like.controller.js";
import e from 'express'
import authMiddleware from '../middleware/auth.js'
const router = e.Router()


router.post('/like', authMiddleware, toggleLike)


export default router