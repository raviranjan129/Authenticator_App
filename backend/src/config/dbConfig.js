import mongoose from "mongoose";


export default async function connectDB() {
 
    try {
        await mongoose.connect("mongodb+srv://rk6318633:VFuSiobh50SFI6OC@cluster0.c4h8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to mongoDb')
    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
}