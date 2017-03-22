var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


// router.get('/:BID', function(req, res, next) {
//     return knex("product").where('barcode', req.params.BID).first()
//         .then(data => {
//             res.json(data);
//         });
// });

// router.get('/:BID', function(req, res, next) {
//     return knex("review")
//         .select('*').innerJoin('product', 'product.id', 'productId')
//         .where('barcode', req.params.BID)
//         .then(data => {
//             res.json(data);
//         });
// })

// router.post('/:BID', function(req, res, next) {
// knex('review').insert({
//         review: req.body.review,
//     }).where('barcode', req.params.BID)
//     .returning('*').then(data => {
//         res.json(data);
//     });
// });
router.post('/:id', (req, res) =>{

    knex('review')
        .where('barcode', req.params.id)
        .insert({
            memberName: req.body.memberName,
            productId: req.body.productId,
            review: req.body.review,
            rating: req.body.rating
        }).returning('*').then(data => {
            res.json(data);
        });
});


module.exports = router;
