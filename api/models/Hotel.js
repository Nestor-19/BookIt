import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    
    distanceFromCC: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    images: {
        type: [String],
    },

    rating: {
        type: Number,
        minimum: 0,
        maximum: 5
    },

    rooms: {
        type: [String]
    },

    cheapestCost: {
        type: Number,
        required: true
    },

    featured: {
        type: Boolean,
        default: false,
    },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;