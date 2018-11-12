const router = require('express').Router();
const Product = require('../../models/category').category;
router.get('/', (req, res) => {
    Product.find({})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(err))
});
module.exports = router;