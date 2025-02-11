import express from "express";

const app = express()
const PORT = 3000

app.get('/ping', (req, res) => {
    res.send('Hello ping route');
});
app.listen(PORT,async()=>{
    console.log(`Server is running on Port ${PORT}`)
} )