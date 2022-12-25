import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";

@Injectable()
export class UserServiceImpl implements UserService {
  registerUser(): void {
    return;
  }

  deletUser(): void {
    return;
  }

  findUser(): string {
    return "hello world!!! ~~~~~~~~~";
  }
}
