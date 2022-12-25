import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppServiceImpl } from "./app.service.impl";
// import { UserServiceImpl } from "./user.service.v1";
import { UserController } from "./user.controller";
import { UserServiceImpl2 } from "./user.service.v2";
@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [
    AppServiceImpl,
    { provide: "UserService", useClass: UserServiceImpl2 },
  ],
})
export class AppModule {}
