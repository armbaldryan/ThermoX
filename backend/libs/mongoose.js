const mongoose = require('mongoose');
const config = require('../config');

mongoose.promise = global.Promise;
mongoose.connect(config.get('mongoose: uri'), config.get('mongoose: options'));

module.exports = mongoose;
