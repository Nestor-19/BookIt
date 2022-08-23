import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";


const app = express();

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Successfully connected to MongoDB!")
    } 
    catch (error) {
        throw error
    }
}

app.listen(3000, () => {
    connect();
    console.log(`Listening on port 3000`);
})