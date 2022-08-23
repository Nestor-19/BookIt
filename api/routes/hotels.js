import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();


router.post("/", async (req,res) => {

    const hotel = new Hotel();

    try{
        const savedHotel = await hotel.save();
        res.status(200).json(savedHotel);
    }
    catch (error){
        res.status(500).json(error);
    }
});

router.put("/:id", async (req,res) => {

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }
    catch (error){
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req,res) => {

    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been successfully deleted");
    }
    catch (error){
        res.status(500).json(error);
    }
});


router.get("/:id", async (req,res) => {

    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }
    catch (error){
        res.status(500).json(error);
    }
});

router.get("/", async (req,res) => {

    try{
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    }
    catch (error){
        res.status(500).json(error);
    }
});

export default router;
