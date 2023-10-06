import { BaseModel } from "@adonisjs/lucid/build/src/Orm/BaseModel";
import { ModelPaginator } from "@adonisjs/lucid/build/src/Orm/Paginator";
import { SnakeCaseNamingStrategy } from "@adonisjs/lucid/build/src/Orm/NamingStrategies/SnakeCase";
import { scope } from "@adonisjs/lucid/build/src/Helpers/scope";
import { Adapter } from "@adonisjs/lucid/build/src/Orm/Adapter";
import database from "@clark/database";
import { ioc } from "@clark/ioc";

BaseModel.$adapter = new Adapter(database);
BaseModel.$container = ioc;

export * from "@adonisjs/lucid/build/src/Orm/Decorators";
export { BaseModel, ModelPaginator, SnakeCaseNamingStrategy, scope };
