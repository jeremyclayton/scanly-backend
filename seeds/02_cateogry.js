exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "category"; ALTER SEQUENCE category_id_seq RESTART WITH 11;')
    .then(function () {
      var categorys = [{
        id: 1,
        name: 'Snowboard'
      }, {
        id: 2,
        name: 'Skateboard'
      }, {
        id: 3,
        name: 'Outer Wear'
      }, {
        id: 4,
        name: 'Soft Goods'
      }, {
        id: 5,
        name: 'Shoes'
      }, {
        id: 6,
        name: 'Goggles'
      }, {
        id: 7,
        name: 'Hardwear'
      }, {
        id: 8,
        name: 'Glasses'
      }, {
        id: 9,
        name: 'Clothing'
      }, {
        id: 10,
        name: 'Accessories'
      }];
      return knex('category').insert(categorys);
    });
};
