module.exports = function(app) {
    app.use('/catalogue', require('./catalogue'));
    app.use('/categories', require('./categories'));
};