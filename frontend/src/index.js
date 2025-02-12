import express from "express";
import connectDB from "./config/dbConfig.js";
import userRouter from './routers/user.js'

const app = express()
const PORT = 3000

app.use(express.urlencoded())
app.use('/api',userRouter);

app.get('/ping', (req, res) => {
    res.send('Hello ping route');
});
app.listen(PORT,async()=>{
    console.log(`Server is running on Port ${PORT}`)
    connectDB();
} )