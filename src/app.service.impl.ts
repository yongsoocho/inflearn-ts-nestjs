import { Injectable } from "@nestjs/common";
import { AppService } from "./app.service";

@Injectable()
export class AppServiceImpl implements AppService {
  getHello(): string {
    return "Hello World!";
  }

  register(): void {
    return;
  }

  findUser(): void {
    return;
  }

  deletUser(): void {
    return;
  }
}
