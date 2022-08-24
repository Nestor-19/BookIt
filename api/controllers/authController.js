import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {

    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new  User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        await newUser.save();
        res.status(200).send("Successfully added user!")
    }
    catch (error){
        next(error);
    }
}