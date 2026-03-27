import { getLikes, toggleLike } from "../controllers/like.controller.js";
import e from 'express'
import authMiddleware from '../middleware/auth.js'
const router = e.Router()


router.post('/toggle', authMiddleware, toggleLike)

router.get('/get', getLikes)


export default router