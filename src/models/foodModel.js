const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productName : {
        type: String,
        required: true,
        trim: true
    },
    sizes: {
        type: String,
        required: true
    },
    netWeight: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        default: []
    },
    nutrition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: String,
        required: true
    },
    isVegeterian: {
        type: String,
        enum: ['Vegetarian','Non Vegetarian'],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: { 
        type: String,
        default: new Date().toLocaleString()
    },
    updatedAt: {
        type: String,
        default: null
    },
    deletedAt: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Food', foodSchema) 