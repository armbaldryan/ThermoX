const nconf = require('nconf');
const path = require('path');

nconf.argv()
    .env()
    .file({ file: path.resolve(__dirname, 'config.json' )});

module.exports = nconf;