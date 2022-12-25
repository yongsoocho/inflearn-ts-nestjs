import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { db, IUserDB } from "./db/user.repository";
import { UserIdDto } from "./dto/user.dto";

@Injectable()
export class UserServiceImpl2 implements UserService {
  register(): void {
    return;
  }

  findUser(payload: UserIdDto): IUserDB {
    const user = db.find((e) => e.USER_ID === payload.ID);

    return user;
  }

  deletUser(): void {
    return;
  }
}
