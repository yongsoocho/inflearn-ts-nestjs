export interface IUserDB {
  USER_ID: number;
  NAME: string;
  EMAIL: string;
  PWD: string;
  ADR: string;
}

export const db: IUserDB[] = [
  {
    USER_ID: 1,
    NAME: "YONG SOO",
    EMAIL: "abc@example.com",
    PWD: "inf-!learn",
    ADR: "서울 양천구",
  },
  {
    USER_ID: 2,
    NAME: "SEON TAE",
    EMAIL: "def@example.com",
    PWD: "book!lover@",
    ADR: "경기도 분당구",
  },
  {
    USER_ID: 3,
    NAME: "CHAE WON",
    EMAIL: "ghi@example.com",
    PWD: "lol#*top",
    ADR: "서울 동작구",
  },
];
