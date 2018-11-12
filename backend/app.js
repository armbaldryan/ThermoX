const http = require('http');
const express = require('express');
const config = require('./config');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Product  = require('./models/product').product;
const Category = require('./models/category').category;
http.createServer(app).listen(config.get('port'), () => {
    console.log(`listen port ${config.get('port')} `)
});

const staticDir = path.join(__dirname, '/static');
app.use(express.static(staticDir));

const publicDir = path.join(__dirname, '../frontend/dist');
app.use(express.static(publicDir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

require('./routes')(app);

// const category = new Category({
//     title: 'Арктика',
// });
//
// category.save()
//     .then((data) => console.log('data :::', data))
//     .catch((err) => console.log('err :::', err));

// const product = new Product({
//     categoryID: '123',
//     title: 'ТЕРМОС С УЗКИМ ГОРЛОМ,АМЕРИКАНСКИЙ ДИЗАЙН',
//     serialNumber: 106,
//     description: 'Наполните классический термос чаем, чтобы даже в самом долгом походе он сохранил свой жар.' +
//     ' горячего чая с друзьями. Вечер станет теплее, а разговоры - еще душевнее.',
//     qualities: ['Современный американский дизайн', 'Покрытие из молотковой эмали', 'Две чашки в комплекте', 'Успешно прошёл испытания в арктической экспедиции'],
//     features: [{
//         size: 500,
//         properties: [{
//             price: 10900,
//             mainImage: `http://localhost:${config.get('port')}/images/arktika-106-500-green.png`,
//             color: 'green',
//             live: '18/24',
//             dimensions: '2.62 x 2.62 x 8.5',
//             weight: 260,
//         },
//             {
//                 price: 10900,
//                 mainImage: `http://localhost:${config.get('port')}/images/arktika-106-500-black.png`,
//                 color: 'black',
//                 live: '18/24',
//                 dimensions: '2.62 x 2.62 x 8.5',
//                 weight: 260,
//             }]
//     },{
//         size: 750,
//         properties: [{
//             price: 10900,
//             mainImage: `http://localhost:${config.get('port')}/images/arktika-106-750-red.png`,
//             color: 'red',
//             live: '18/24',
//             dimensions: '2.62 x 2.62 x 8.5',
//             weight: 260,
//         },
//         {
//             price: 10900,
//             mainImage: `http://localhost:${config.get('port')}/images/arktika-106-750-blue.png`,
//             color: 'blue',
//             live: '18/24',
//             dimensions: '2.62 x 2.62 x 8.5',
//             weight: 260,
//         },{
//             price: 10900,
//             mainImage: `http://localhost:${config.get('port')}/images/arktika-106-750-black.png`,
//             color: 'black',
//             live: '18/24',
//             dimensions: '2.62 x 2.62 x 8.5',
//             weight: 260,
//         }]
//     }]
// });
//
// // const product = new Product({
// //     categoryID: '456',
// //     title: 'ThermoX',
// //     serialNumber: 1,
// //     description: 'Наполните классический термос чаем, чтобы даже в самом долгом походе он сохранил свой жар.' +
// //     ' горячего чая с друзьями. Вечер станет теплее, а разговоры - еще душевнее.',
// //     qualities: ['Классическая модель', 'Качество, проверенное временем', 'Гарантия 5 лет'],
// //     features: [{
// //         size: 450,
// //         properties: [{
// //             price: 9900,
// //             mainImage: `http://localhost:${config.get('port')}/images/thermos.png`,
// //             color: 'black',
// //             live: '18/24',
// //             dimensions: '2.62 x 2.62 x 8.5',
// //             weight: 260,
// //         }]
// //     }]
// // });
//
// product.save()
//     .then((data) => console.log('data :::', data))
//     .catch((err) => console.log('err :::', err));