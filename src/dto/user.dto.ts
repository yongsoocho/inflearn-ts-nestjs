import { IsBoolean, IsNumber, IsString } from "class-validator";
import { IUserDB } from "../db/user.repository";

export class GetUserDto {
  constructor() {
    console.log("user dto on!");
  }

  @IsString()
  ID: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  marketing: boolean;

  @IsNumber()
  height: number;
}

export class UserIdDto {
  ID: string | number;

  public static Req(p: UserIdDto) {
    return {
      ID: Number(p?.ID) ?? 1,
    };
  }

  public static Res(p: IUserDB) {
    return {
      ID: p.USER_ID,
      EMAIL: p.EMAIL,
      NAME: p.NAME,
    };
  }
}
