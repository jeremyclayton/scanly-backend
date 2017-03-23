var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
    return knex("product")
        .then(data => {
            res.json(data);
        });
});
router.get('/:BID', function(req, res, next) {
    return knex("product").where('barcode', req.params.BID).first()
        .then(data => {
            res.json(data);
        });
});

router.get('/:BID/review', function(req, res, next) {
    return knex("review")
        .select('review', 'memberName', 'productId', 'rating').innerJoin('product', 'product.id', 'productId')
        .where('barcode', req.params.BID)
        .then(data => {
            res.json(data);
        });
})

// router.post('/:BID', function(req, res, next) {
// knex('review').insert({
//         review: req.body.review,
//     }).where('barcode', req.params.BID)
//     .returning('*').then(data => {
//         res.json(data);
//     });
// });
// router.post('/:BID', (req, res) =>{
//     let id = req.params.id;
//     knex('review')
//     .innerJoin('product', 'product.id', 'productId')
//         .where('barcode', req.params.BID)
//         .insert({
//             review: req.body.review,
//         }).returning('*').then(data => {
//             res.json(data);
//         });
// });


module.exports = router;
