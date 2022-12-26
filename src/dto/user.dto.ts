import { IsString, IsNumber } from "class-validator";
import { IUserDB } from "../db/user.repository";
export class UserInfoDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

export class UserQueryIdDto {
  ID: number | string;

  public static Req(p: UserQueryIdDto) {
    return { ID: typeof p.ID === "number" ? p.ID : Number(p.ID) };
  }

  public static Res(p: IUserDB) {
    return {
      ID: p.USER_ID,
      NAME: p.NAME,
      EMAIL: p.EMAIL,
    };
  }
}
