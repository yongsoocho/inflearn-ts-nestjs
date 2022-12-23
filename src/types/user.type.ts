export interface IUserInfo {
  name: string;
  age: number | string;
}

export class UserInfo {
  [props: string]: string | number;

  public static Request(p: IUserInfo) {
    return {
      name: p?.name ?? "이름없음",
      age: typeof p?.age === "number" ? p?.age : Number(p?.age) ?? 0,
    };
  }
}
