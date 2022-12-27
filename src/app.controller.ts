import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { IUserInfo, UserInfo } from "./types/user.type";
import { UserInfoDto, UserQueryIdDto } from "./dto/user.dto";
import { UserEntity } from "./entity/user.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("something")
  somethingLogicToUser(@Query() query) {
    const payload = new UserEntity.Builder().$USER_ID(query.ID).build();

    const result = this.appService.somethingLogicToUser(payload);

    return new UserEntity.Builder()
      .$USER_ID(result.USER_ID)
      .$NAME(result.NAME)
      .$ADR(result.ADR)
      .build();
  }

  @Get()
  getHello(@Query("ID") ID: number): string {
    console.log(ID, typeof ID);
    return this.appService.getHello();
  }

  @Post()
  getUserInfo(@Body() body) {
    const payload = new UserEntity.Builder()
      .$USER_ID(body.ID)
      .$NAME(body.NAME)
      .$EMAIL(body.EMAIL)
      .build();

    console.log(payload);

    return this.appService.getHello();
  }

  @Post("dto")
  @UsePipes(new ValidationPipe({ transform: true }))
  getUserInfoByDto(@Body() body: UserInfoDto) {
    console.log(body, typeof body.age);
    return this.appService.getHello();
  }
}
