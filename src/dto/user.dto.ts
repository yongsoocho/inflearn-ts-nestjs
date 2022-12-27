import { ApiProperty } from "@nestjs/swagger";
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
  @ApiProperty()
  ID?: number;
  @ApiProperty()
  EMAIL?: string;
  @ApiProperty()
  NAME?: string;

  constructor(ID?: number | string, EMAIL?: string, NAME?: string) {
    if (ID) this.ID = typeof ID === "number" ? ID : Number(ID);
    if (EMAIL) this.EMAIL = EMAIL;
    if (NAME) this.NAME = NAME;
  }

  @ApiProperty()
  public static Req(p: UserIdDto): any {
    return new UserIdDto(p.ID);
  }

  @ApiProperty()
  public static Res(p: IUserDB) {
    // return {
    //   ID: p.USER_ID ?? 1,
    //   EMAIL: p.EMAIL ?? "email@example.com",
    //   NAME: p.NAME ?? "알수없음",
    // };

    return new UserIdDto(p.USER_ID, p.EMAIL, p.NAME);
  }
}

export class UserInfoDto {
  constructor(
    protected _ID?: number | string,
    protected _name?: string,
    protected _age?: number,
  ) {}

  static Builder = class extends UserIdDto {
    constructor() {
      super();
    }
  };
}
