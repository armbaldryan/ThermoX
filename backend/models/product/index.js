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

//
// const a = [
//     {
//         size: Number,
//         price: 499,
//         colors: [
//             {
//                 name: '#ffffff',
//                 images: [
//                     'url',
//                     'url',
//                 ]
//             }
//         ],
//     }
// ]
