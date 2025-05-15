import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
// console.log("Mongo URI:", process.env.MONGO_URI);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log("error occurred", error); 
    }
};

export default connectDB;
