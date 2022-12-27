import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AppServiceImpl } from "./app.service.impl";
// import { AppService } from "./app.service";
import { GetUserInfo, IGetUserInfo } from "./types/index";
import { GetUserDto } from "./dto/user.dto";
import { ApiResponse } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppServiceImpl) {}

  @Get()
  @ApiResponse({ status: 200 })
  getHello(@Query() query) {
    return {
      ID: 1,
      NAME: "yongs",
      EMAIL: "yongsoocho@naver.com",
    };
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
