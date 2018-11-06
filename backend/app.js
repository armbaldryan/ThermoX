const http = require('http');
const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
// const mongoose = require('./libs/mongoose');
const product = require('./models/product').product;
const app = express();

http.createServer(app).listen(config.get('port'), () => {
    console.log(`listen port ${config.get('port')} `)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require('./routes')(app);
// console.log('product :::', product);
// app.post('/product', (req, res) => {
//     console.log('req, res :::', req, res);
//
//     product.save({
//         title: 'aaa',
//         category: 'bbb',
//         serialNumber: 1,
//         property: {
//             color: 'green',
//             size: 200,
//             price: 5000,
//             image: 'aaaa'
//         },
//         description: 'aaaaaa',
//     })
// });
console.log(product({
        title: 'aaa',
        category: 'bbb',
        serialNumber: 1,
        property: {
            color: 'green',
            size: 200,
            price: 5000,
            image: 'aaaa'
        },
        description: 'aaaaaa',
    }));


// product.find({
//     title: 'aaa',
//     category: 'bbb',
//     serialNumber: 1,
//     property: {
//         color: 'green',
//         size: 200,
//         price: 5000,
//         image: 'aaaa'
//     },
//     description: 'aaaaaa',
// });