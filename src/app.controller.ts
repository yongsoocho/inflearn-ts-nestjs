import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { IGetUserInfo } from "./types/index";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getUserInfo(@Body() body: IGetUserInfo) {
    console.log(typeof body?.ID);
    console.log(typeof body?.age);
    return this.appService.getHello();
  }
}
