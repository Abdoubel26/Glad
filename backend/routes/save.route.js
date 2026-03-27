import { getSaves, toggleSave } from "../controllers/save.controller.js";
import authMiddleware from "../middleware/auth.js";
import e from 'express'

const router = e.Router()


router.get('/get', getSaves)

router.post('/toggle', authMiddleware, toggleSave)

export default router