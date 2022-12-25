import { IUserDB } from "./db/user.repository";
import { UserIdDto } from "./dto/user.dto";

export interface UserService {
  register(): void;

  findUser(payload: UserIdDto): IUserDB;

  deletUser(): void;
}
