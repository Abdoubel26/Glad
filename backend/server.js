import express from 'express'
import connectDB from './config/db.js';


const app = express();

connectDB();

app.listen('5000', () => {
    console.log("App is listening in port 5000")
});