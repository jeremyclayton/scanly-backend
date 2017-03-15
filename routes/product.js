var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.get('/:BID', function(req, res, next) {
    return knex("product").where('barcode', req.params.BID).first()
        .then(data => {
            res.json(data);
        });
});

module.exports = router;
