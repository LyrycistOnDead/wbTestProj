import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('daily_tariffs', (table) => {
        table.increments('id').primary();
        table.date('date').notNullable();
        table.integer('warehouse_id').notNullable();
        table.float('coefficient').notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('daily_tariffs');
}

