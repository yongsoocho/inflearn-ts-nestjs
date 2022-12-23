import { IsBoolean, IsNumber, IsString } from "class-validator";

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
