import { Controller, Get, Inject, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserIdDto } from "./dto/user.dto";

@Controller("user")
export class UserController {
  constructor(
    @Inject("UserService") private readonly userService: UserService,
  ) {}

  @Get()
  findUser(@Query() body: UserIdDto) {
    console.log(UserIdDto.Req(body));
    const result = this.userService.findUser(UserIdDto.Req(body));
    return UserIdDto.Res(result);
  }
}
