
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('categoryImg');
  })
};
// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('category')
};
