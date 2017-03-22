var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
    return knex("category")
        .then(data => {
            res.json(data);
        });
});

router.get('/:id/product', function(req, res, next) {
    return knex("product")
        .where('categoryId', req.params.id)
        .then(data => {
            res.json(data);
        });
});
// .join('category', 'category.id', 'categoryId')
//     .select('*')


module.exports = router;
