const http = require('http');
const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Product  = require('./models/product').product;

http.createServer(app).listen(config.get('port'), () => {
    console.log(`listen port ${config.get('port')} `)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

require('./routes')(app);

// const product = new Product({
//     categoryID: '123',
//     title: 'ТЕРМОС С УЗКИМ ГОРЛОМ, КЛАССИЧЕСКИЙ, ПОКРЫТИЕ С ЭФФЕКТОМ ПЛАСТИКА',
//     serialNumber: 134,
//     description: 'Наполните классический термос чаем, чтобы даже в самом долгом походе он сохранил свой жар.' +
//     ' горячего чая с друзьями. Вечер станет теплее, а разговоры - еще душевнее.',
//     features: [{
//         size: 500,
//         properties: [{
//             price: 9900,
//             image: 'https://rusarctica.ru/images/stories/virtuemart/product/101-3503.jpg',
//             color: 'orange'
//         }]
//     }],
// });
//
// product.save()
//     .then((data) => console.log('data :::', data))
//     .catch((err) => console.log('err :::', err));