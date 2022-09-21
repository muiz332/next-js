/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {


  return knex.schema.createTable("post",function(table){
    table.increments('id')
    table.string('title').notNullable()
    table.text('content')
    table.timestamps(true,true)


  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('post')
};

