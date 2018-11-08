const http = require('http');
const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

http.createServer(app).listen(config.get('port'), () => {
    console.log(`listen port ${config.get('port')} `)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

require('./routes')(app);
