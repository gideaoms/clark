import { DateTime } from "luxon";
import { BaseModel, column } from "@clark/orm";

class User extends BaseModel {
  public static table = "cities";

  @column({ isPrimary: true, serializeAs: null })
  public id!: number;

  @column()
  public name!: string;

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime;
}

// console.log(User);
// const users = await User.all();
// console.log({ users });
// User.all().then(console.log);
User.create({});
