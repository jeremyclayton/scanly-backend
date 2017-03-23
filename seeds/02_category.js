exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "category"; ALTER SEQUENCE category_id_seq RESTART WITH 11;')
    .then(function () {
      var categorys = [{
        id: 1,
        name: 'Snowboard',
        categoryImg: 'http://mtnweekly.com/wp-content/uploads/2016/01/2017-GNU-Snowboards-4-300x238.jpg'
      }, {
        id: 2,
        name: 'Skateboard',
        categoryImg: 'http://designrfix.com/wp-content/uploads/2010/01/skateboard-deck-design-69.jpg'
      }, {
        id: 3,
        name: 'Outerwear',
        categoryImg: 'http://thumbs2.ebaystatic.com/d/l225/m/mCRM-7fjTqVpRcl5gUbZU3w.jpg'
      }, {
        id: 4,
        name: 'Soft Goods',
        categoryImg: 'https://static.sourceboards.com/media/catalog/product/cache/2/small_image/200x200/0576c302971f9a6ccb546ba814208ec7/v/n/vn6acscgoodbkw.jpg'
      }, {
        id: 5,
        name: 'Shoes',
        categoryImg: 'https://fgl.scene7.com/is/image/FGLSportsLtd/332093543_99_a?wid=288&hei=288&op_sharpen=1&resMode=sharp2'
      }, {
        id: 6,
        name: 'Goggles',
        categoryImg: 'https://www.rei.com/media/product/108309'
      }, {
        id: 7,
        name: 'Hardwear',
        categoryImg: 'http://www.skateboardhere.com/images/skateboard-hardware.jpg'
      }, {
        id: 8,
        name: 'Glasses',
        categoryImg: 'https://www.shadestation.co.uk/media/thumbs/350x218.75/media/product_images/Oakley-Sunglasses-04-325fw350fh218.75.png'
      }, {
        id: 9,
        name: 'Clothing',
        categoryImg: 'http://www.undergroundsurf.co.uk/images/clothesracknew.jpg'
      }, {
        id: 10,
        name: 'Accessories',
        categoryImg: 'https://www.marasurf.com/image/cache/data/Osprey/BGG1419-BGG1423-osprey-skateboard-accessories-skate-helmet-black-front-220x220.jpg'
      }];
      return knex('category').insert(categorys);
    });
};
