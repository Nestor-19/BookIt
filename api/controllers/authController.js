import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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

export const loginUser = async (req, res, next) => {

    try{
        const currUser = await User.findOne({username: req.body.username});

        if (!currUser){
            return next("404, User not found");
        }

        const iscorrectPassword = await bcrypt.compare(req.body.password, currUser.password);

        if (!iscorrectPassword){
            return next("400, Incorrect Password or username!");
        }
        
        // if password is correct, we create a jwt token
        const token = jwt.sign({id: currUser._id, isAdmin: currUser.isAdmin}, process.env.JWT)

        const {password, isAdmin, ...otherUserDetails} = currUser._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...otherUserDetails});
    }
    catch (error){
        next(error);
    }
}

