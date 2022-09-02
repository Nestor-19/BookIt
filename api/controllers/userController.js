import User from "../models/User.js";

// Note: Creating a user is handled in authController.js through registerUser()

export const updateUser = async (req, res, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    }
    catch (error){
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been successfully deleted");
    }
    catch (error){
        next(error);
    }
}


export const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (error){
        next(error);
    }
}


export const getAllUsers = async (req, res, next) => {
    try{
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }
    catch (error){
        next(error);
    }
}