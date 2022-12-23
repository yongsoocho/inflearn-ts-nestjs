export interface AppService {
  register(): void;

  findUser(): void;

  deletUser(): void;

  getHello(): string;
}
