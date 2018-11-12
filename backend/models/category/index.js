const mongoose = require('../../libs/mongoose.js');

const { Schema } = mongoose;

const Category = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
});

exports.category = mongoose.model('category', Category);
