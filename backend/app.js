const http = require('http');
const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

http.createServer(app).listen(config.get('port'), () => {
    console.log(`listen port ${config.get('port')} `)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
require('./routes')(app);
