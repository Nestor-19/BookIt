import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/auth.js";
import hotelsRoomsRoute from "./routes/auth.js";
import usersRoute from "./routes/auth.js";

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

app.use("/api/auth", authRoute);
app.use("/api/hotels", authRoute);
app.use("/api/hotelrooms", authRoute);
app.use("/api/users", authRoute);

app.listen(3000, () => {
    connect();
    console.log(`Listening on port 3000`);
})