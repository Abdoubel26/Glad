import express from 'express'
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'

const app = express();

app.use(express.json())


app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)

connectDB();

app.listen('5000', () => {
    console.log("App is listening in port 5000")
});