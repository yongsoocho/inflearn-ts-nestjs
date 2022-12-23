export interface UserService {
  register(): void;

  findUser(): string;

  deletUser(): void;
}
