const router = require('express').Router();
const Product = require('../../models/product').product;
router.get('/:slug', (req, res) => {
    console.log(req.params.slug);
    Product.find({'categoryName': req.params.slug})
        .then((data) => {
            console.log('data--- -> ', data);
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(err))
});
router.get('/', (req, res) => {
    console.log('req, res :::', req, res);
    Product.find({})
        .then((data) => {
            console.log('data -> ', 'request - ');
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(err))
});
module.exports = router;