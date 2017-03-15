
exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('details').notNullable();
    table.float('price').notNullable();
    table.text('barcode').notNullable();
    table.integer('picUrl');
    table.integer('categoryId').references('category.id').unsigned().onDelete('cascade');

  })
};
// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('product')
};
