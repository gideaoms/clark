import { Logger } from "@adonisjs/logger";
import { Profiler } from "@adonisjs/profiler";
import { Emitter } from "@adonisjs/events/build/src/Emitter";
import { Database } from "@adonisjs/lucid/build/src/Database";
import type { DatabaseConfig } from "@ioc:Adonis/Lucid/Database";

// const appRoot = __dirname;
const appRoot = "/home/gideaoms/Projects/clark/apps/example";
const database: DatabaseConfig = {
  connection: "sqlite",
  connections: {
    sqlite: {
      client: "sqlite",
      connection: {
        filename: "/home/gideaoms/Projects/clark/apps/example/db.sqlite",
      },
      useNullAsDefault: true,
      healthCheck: false,
      debug: false,
    },
  },
};
const logger = new Logger({
  name: "app-name",
  enabled: true,
  level: "info",
  prettyPrint: true,
});
const profiler = new Profiler(appRoot, logger, {
  enabled: true,
  blacklist: [],
  whitelist: [],
});
const emitter = new Emitter();

export default new Database(database, logger, profiler, emitter);
