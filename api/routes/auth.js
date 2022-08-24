import express from "express";
import { registerUser , loginUser} from "../controllers/authController.js";

const router = express.Router();

//Create User route
router.post("/register", registerUser);

//Login User route
router.post("/login", loginUser);

export default router;
