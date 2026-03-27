import express from 'express'
import connectDB from './config/db.js';
import cors from 'cors'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import likeRouter from './routes/like.route.js'
import saveRouter from './routes/save.route.js'

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
}))
app.use(express.json())


app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api/like', likeRouter)
app.use('/api/save', saveRouter)

connectDB();

app.listen('5000', () => {
    console.log("App is listening in port 5000")
});