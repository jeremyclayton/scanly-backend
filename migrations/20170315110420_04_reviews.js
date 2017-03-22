
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', (table) =>{
    table.increments();
    table.text('memberName');
    table.text('review').notNullable();
    table.integer('rating');
    table.integer('productId').references('product.id').unsigned().onDelete('cascade');

  })
};
// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('review')
};
