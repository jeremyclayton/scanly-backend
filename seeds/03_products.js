
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "product"; ALTER SEQUENCE product_id_seq RESTART WITH 2;')
    .then(function () {
      var products = [{
        id: 1,
        name: 'Rome Mod',
        details: 'The Rome Mod is great board for all moutain riders. ',
        price: 499.99,
        barcode: '0012300302883',
        picUrl: 1,
        categoryId: 1
      }];
      return knex('product').insert(products);
    });
};
