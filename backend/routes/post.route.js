import e from 'express'
import { getPosts, createPost } from '../controllers/post.controller.js'

const router = e.Router()


router.get('/all',getPosts)


router.post('/create', createPost)

export default router