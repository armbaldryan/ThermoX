const Product = require('../../models/product').product;

exports.get = (req, res) => {
    Product.find({})
        .then((data) => {
            console.log('data :::', data);
            res.status(200)
                res.json(data);
        })
        .catch((err) => res.status(400).send(err))
};