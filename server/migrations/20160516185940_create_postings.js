
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postings', function(table) {
    table.increments();
    table.integer('author_id');
    table.string('title');
    table.string('image_url');
    table.text('posting');
    table.integer('votes');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postings');
};
