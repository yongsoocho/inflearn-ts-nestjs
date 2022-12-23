import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";

@Injectable()
export class UserServiceImpl implements UserService {
  register(): void {
    return;
  }

  findUser(): string {
    return "hi";
  }

  deletUser(): void {
    return;
  }
}
