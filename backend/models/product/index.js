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
            image: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            }
        }]
    }],
});

exports.product = mongoose.model('product', Product);
