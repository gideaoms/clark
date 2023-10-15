import { Logger } from "@adonisjs/logger";
import { Profiler } from "@adonisjs/profiler";
import { Emitter } from "@adonisjs/events/build/src/Emitter/index.js";
import { Database } from "@adonisjs/lucid/build/src/Database/index.js";
import type { DatabaseConfig } from "@ioc:Adonis/Lucid/Database";

const appRoot = "";
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

export default class extends Database {
  constructor(database: DatabaseConfig) {
    super(database, logger, profiler, emitter);
  }
}
