import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { GetUserInfo, IGetUserInfo } from "./types/index";
import { GetUserDto } from "./dto/user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // class-transformer class-validator
  @Post()
  getUserInfo(@Body() body: GetUserInfo) {
    const payload = GetUserInfo.Req(body);
    console.log(payload);
    return this.appService.getHello();
  }

  @Post("/dto")
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  getUserInfoByDto(@Body() getUserDto: GetUserDto) {
    console.log(getUserDto);
    return this.appService.getHello();
  }

  @Post("/trans")
  getUserId(@Body("age") age: number) {
    console.log(age, typeof age);
    return this.appService.getHello();
  }
}
