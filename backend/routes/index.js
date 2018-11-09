module.exports = function(app) {
    app.use('/catalogue', require('./catalogue'));
};