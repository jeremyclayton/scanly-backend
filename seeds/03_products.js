exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "product"; ALTER SEQUENCE product_id_seq RESTART WITH 11;')
        .then(function() {
            var products = [{
                id: 1,
                name: 'Rome Mod',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 499.99,
                barcode: '0012300302883',
                picUrl: 'http://www.romesnowboards.com/img/boards/mod/162.jpg',
                categoryId: 1
            }, {
                id: 2,
                name: 'Salomon Villian 155',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 469.95,
                barcode: '0887850997878',
                picUrl: '',
                categoryId: 1
            }, {
                id: 3,
                name: 'Spring Break Diamond Tail',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 699.95,
                barcode: '0842852174467',
                picUrl: '',
                categoryId: 1
            }, {
                id: 4,
                name: 'Huf Classic Hi Ess',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 69.95,
                barcode: '0846769074209',
                picUrl: '',
                categoryId: 5
            }, {
                id: 5,
                name: 'Adidas X Hardies Crewneck Navy',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 69.95,
                barcode: '0190308489048',
                picUrl: '',
                categoryId: 9
            }, {
                id: 6,
                name: 'Coal Wilderness',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 34.95,
                barcode: '0842852167711',
                picUrl: '',
                categoryId: 9
            }, {
                id: 7,
                name: 'Brixton Claxton Jacket Black',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 64.95,
                barcode: '0888588085608',
                picUrl: '',
                categoryId: 3
            }, {
                id: 8,
                name: 'Stance Icy Caps Blue Size Med',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 11.95,
                barcode: '0190107050647',
                picUrl: '',
                categoryId: 10
            }, {
                id: 9,
                name: 'Brixton Wesley Hat  Brown',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 51.95,
                barcode: '0888588163016',
                picUrl: '',
                categoryId: 9
            }, {
                id: 10,
                name: 'RVCA Subject Longsleeve Flannel Blue ',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 49.95,
                barcode: '0190235181596',
                picUrl: '',
                categoryId: 9
            }, ];
            return knex('product').insert(products);
        });
};
