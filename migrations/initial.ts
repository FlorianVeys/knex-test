
export async function up (knex) {
    return knex.schema
      .createTable('clients', function (table) {
         table.increments('id').unsigned().primary();
         table.string('first_name', 255).notNullable();
         table.string('last_name', 255).notNullable();
         table.string('gender', 255).notNullable();
         table.string('email', 255).notNullable();
         table.boolean('is_active').notNullable().defaultTo(true);
      })
    .createTable('products', function (table) {
        table.increments('id').unsigned().primary();
        table.string('name').notNullable();
        table.text('description').nullable();
        table.float('price').unsigned().notNullable();
    })
    .createTable('orders', function (table) {
        table.increments('id').unsigned().primary();
        table.datetime('order_at').defaultTo(knex.fn.now());
        table.integer('client_id').notNullable().unsigned();
        table.integer('product_id').notNullable().unsigned();

        table.foreign('client_id').references('clients.id');
        table.foreign('product_id').references('products.id');
    });
  }

export async function down (knex) {
    return knex.schema
      .dropTable('clients')
      .dropTable('products')
      .dropTable('orders');
}
