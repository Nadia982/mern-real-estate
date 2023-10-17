import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();    

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to Mongoose');
}).catch((err) => {
    console.log(`The error is: ${err}`)
});

const router = express.Router();

const app = express();

app.listen(3000,()=>{
    console.log('Server is running on port 4000')
})

app.get('/test', (req, res) => {
    res.json({message: 'Hello, universe'});
})

app.use("/api/user", userRouter)