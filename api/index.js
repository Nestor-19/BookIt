import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import hotelsRoomsRoute from "./routes/hotelrooms.js";
import usersRoute from "./routes/users.js";

const app = express();

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Successfully connected to MongoDB!");
    } 
    catch (error) {
        throw error
    }
}

// Middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/hotelrooms", hotelsRoomsRoute);
app.use("/api/users", usersRoute);

// Error-handling Middleware
app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMsg = error.message || "Error, something went wrong!"
    return res.status(errorStatus).json(errorMsg);
})

app.listen(3000, () => {
    connect();
    console.log(`Listening on port 3000`);
})