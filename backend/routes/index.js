module.exports = function(app) {
    app.get('/catalogue', require('./product').get);
};