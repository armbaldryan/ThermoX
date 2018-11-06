const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
    category: {
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
    property: {
        color: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: Array,
            required: true,
        }
    },
    description: {
        type: String,
        required: true,
    }
});
exports.product = mongoose.model('product', Product);
