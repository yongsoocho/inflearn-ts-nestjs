export interface IGetUserInfo {
  ID: string;
  age: number;
  marketing: boolean;
  height: number;
}

export class GetUserInfo {
  [props: string]: string;

  public static Req(p: GetUserInfo) {
    return {
      ID: p?.ID,
      age: Number(p?.age ?? 1),
      marketing: Boolean(p?.marketing ?? false),
      height: Number(p?.age ?? 0),
    };
  }
}
