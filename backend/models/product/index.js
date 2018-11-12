const mongoose = require('../../libs/mongoose.js');

const { Schema } = mongoose;

const Product = new Schema({
    categoryID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    serialNumber: {
        type: Number,
    },
    description: {
        type: String,
        required: true,
    },
    qualities: [{
        type: String,
        required: true,
    }],
    features: [{
        size: {
            type: Number,
            required: true
        },
        properties: [{
            price: {
                type: Number,
                required: true,
            },
            mainImage: {
                type: String,
                required: true,
            },
            images: [{
                type: String,
            }],
            weight: {
                type: Number,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            live: {
                type: String,
                required: true,
            },
            dimensions: {
                type: String,
                required: true,
            }
        }]
    }],
});

exports.product = mongoose.model('product', Product);
