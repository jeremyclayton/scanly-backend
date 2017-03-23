exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "product"; ALTER SEQUENCE product_id_seq RESTART WITH 21;')
        .then(function() {
            var products = [{
                id: 1,
                name: 'Rome Mod',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 499.99,
                barcode: '0012300302883',
                picUrl: 'http://cdn.avantlink.com/product-images/132/300611/300x300.png',
                categoryId: 1
            }, {
                id: 2,
                name: 'Salomon Villian 155',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 469.95,
                barcode: '0887850997878',
                picUrl: 'https://content.backcountry.com/images/items/medium/NTR/NTR007L/S157CM.jpg',
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
                picUrl: 'http://static.shoplightspeed.com/shops/604947/files/000902609/262x276x2/huf-huf-classic-hi-ess-black-white.jpg',
                categoryId: 5
            }, {
                id: 5,
                name: 'Adidas X Hardies Crewneck Navy',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 69.95,
                barcode: '0190308489048',
                picUrl: 'https://cdn.shopify.com/s/files/1/0220/4678/products/BTKA_1486143542313851_6e827b064398abaa12548774f8b966_1024x1024.jpg?v=1486143543',
                categoryId: 9
            }, {
                id: 6,
                name: 'Coal Wilderness',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 34.95,
                barcode: '0842852167711',
                picUrl: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Coal-The-Wilderness-Elk-Black-Snapback-Hat-_214205.jpg',
                categoryId: 9
            }, {
                id: 7,
                name: 'Brixton Claxton Jacket Black',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 64.95,
                barcode: '0888588085608',
                picUrl: 'http://cdn.shopify.com/s/files/1/1104/6942/products/brix_large.jpg?v=1461045321',
                categoryId: 3
            }, {
                id: 8,
                name: 'Stance Icy Caps Blue Size Med',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 11.95,
                barcode: '0190107050647',
                picUrl: 'https://44a54cd7e43cae68d339-79fdfac25b5b7a089d2cf87c8db56622.ssl.cf2.rackcdn.com/M556D16ICY/M556D16ICY_mediumblue_stance_icy_caps_lp3.jpg',
                categoryId: 10
            }, {
                id: 9,
                name: 'Brixton Wesley Hat Brown',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 51.95,
                barcode: '0888588163016',
                picUrl: 'http://g.nordstromimage.com/ImageGallery/store/product/Large/19/_8592259.jpg',
                categoryId: 9
            }, {
                id: 10,
                name: 'RVCA Subject Longsleeve Flannel Blue ',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 49.95,
                barcode: '0190235181596',
                picUrl: 'https://www.rvca.com/media/filter/l/img/wj506sub_ceu_1_2.jpg',
                categoryId: 9
            },
            {
                id: 11,
                name: 'The Vacation Curious Jason',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 54.95,
                barcode: '0190235181591',
                picUrl: 'https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ3803B-c.1489169546.jpg',
                categoryId: 2
            },
            {
                id: 12,
                name: 'Owner Operator Roll Top Bag (Rust)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 134.95,
                barcode: '0190235181592',
                picUrl: 'https://s-media-cache-ak0.pinimg.com/236x/a8/00/3c/a8003c0fb0f0e3ddfef0caff097ef813.jpg',
                categoryId: 4
            },
            {
                id: 13,
                name: 'Ashbury Warlock (Black)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 48.96,
                barcode: '0190235181593',
                picUrl: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Ashbury-Warlock-Snowboard-Goggles-_233030.jpg',
                categoryId: 6
            },
            {
                id: 14,
                name: 'Venture Polished Hi',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 19.95,
                barcode: '0190235181594',
                picUrl: 'https://cdn.shopify.com/s/files/1/0088/5502/products/Thunder_polished_1_large.jpg?v=1320102868',
                categoryId: 7
            },
            {
                id: 15,
                name: 'Airblaster Puffin Pullover (Black Spruce',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 76.97,
                barcode: '0190235181595',
                picUrl: 'http://www.tactics.com/a/8r1s/p/airblaster-puffin-pullover-jacket-black-spruce.jpg',
                categoryId: 3
            },
            {
                id: 16,
                name: 'Nike SB Dunk Low Elite (Medium Grey)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 109.95,
                barcode: '0190235181597',
                picUrl: 'https://www.nativeskatestore.co.uk/images/zoom-dunk-low-elite-skate-shoes-medium-grey-dark-obsidian-white-medium-grey-p32566-80677_thumb.jpg',
                categoryId: 5
            },
            {
                id: 17,
                name: 'Vans Gilbert Crockett 2 (Black/White)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 49.95,
                barcode: '0190235181598',
                picUrl: 'https://d3b962r9eea4ib.cloudfront.net/fmjycv33/8/141431/22fafddb8e067221bd47fb8b713bec40715bff6a7af2e1607e8980b0f9bf0d34a/A',
                categoryId: 5
            },
            {
                id: 18,
                name: 'LAKAI RILEY HAWK (BLACK SUEDE)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 59.95,
                barcode: '0190235181599',
                picUrl: 'http://skateparkoftampa.com/spot/productimages/colors/710_70002.jpg',
                categoryId: 5
            },
            {
                id: 19,
                name: 'Bones Bones Reds',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 19.95,
                barcode: '0190235181522',
                picUrl: 'http://static.shoplightspeed.com/shops/608013/files/002082025/262x276x2/bones-bones-super-reds-bearings.jpg',
                categoryId: 7
            },
            {
                id: 20,
                name: 'POLAR Martas Roses Tee (White)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 31.95,
                barcode: '0190235181533',
                picUrl: 'http://www.empire-leshop.com/boutique/images_produits/polar_martarose_tee_white_2.jpg',
                categoryId: 9
            },
            {
                id: 21,
                name: 'Nike SB Dunk High QS (Demin)',
                details: 'The Rome Mod is great board for all moutain riders. ',
                price: 109.95,
                barcode: '0190235181544',
                picUrl: 'http://i.ebayimg.com/images/g/KqIAAOSw5cNYm6~I/s-l300.jpg',
                categoryId: 5
            },
         ];
            return knex('product').insert(products);
        });
};
