export class UserInfoDto {
  ID?: number | string;
  NAME?: string;
  AGE?: number;

  constructor(ID?: number | string, NAME?: string, AGE?: number) {
    if (ID) this.ID = ID;
    if (NAME) this.NAME = NAME;
    if (AGE) this.AGE = AGE;
  }

  static Builder = class extends UserInfoDto {
    constructor() {
      super();
    }

    ID_(ID) {
      this.ID = ID;
      return this;
    }

    NAME_(NAME) {
      this.NAME = NAME;
      return this;
    }

    AGE_(AGE) {
      this.AGE = AGE;
      return this;
    }

    build() {
      return new UserInfoDto(this.ID, this.NAME, this.AGE);
    }
  };
}

console.log(new UserInfoDto.Builder().ID_(1).NAME_("soo").build());
