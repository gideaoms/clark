import { defineConfig } from "@clark/core";

export default defineConfig({
  client: "better-sqlite3",
  // client: "sqlite3",
  connection: {
    filename: "./db.sqlite",
  },
  useNullAsDefault: true,
  migrations: {
    tableName: "knex_migrations",
    extension: "ts",
    directory: "database/migrations",
  },
});
