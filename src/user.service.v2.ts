import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";

@Injectable()
export class UserServiceImpl2 implements UserService {
  register(): void {
    return;
  }

  findUser(): string {
    return "super hi";
  }

  deletUser(): void {
    return;
  }
}
