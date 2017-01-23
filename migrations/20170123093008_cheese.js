
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cheese', table => {
    table.increments();
    table.text('name').notNullable();
    table.text('image_url');
    table.integer('rating').notNullable();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cheese');
};
