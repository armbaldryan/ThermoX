module.exports = function(app) {
    app.use('/catalogue', require('./product'));
};