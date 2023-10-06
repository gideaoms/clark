import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
