const router = require('express').Router();
const Product = require('../../models/product').product;
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Product.findById(req.params.id)
        .then((data) => {
            console.log('data -> ', data);
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(err))
});
router.get('/', (req, res) => {
    Product.find({})
        .then((data) => {
            console.log('data -> ', data);
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(err))
});
module.exports = router;