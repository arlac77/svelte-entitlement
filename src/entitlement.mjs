/**
 *
 */
export class Entitlement {
  constructor(json) {
    if (typeof json === "string") {
      Object.defineProperties(this, { name: { value: json } });
    } else {
      Object.assign(this, json);
    }

    this.id = this.name;
  }

  get name() {
    return this.cn;
  }

  /*
  get id() {
    return this.name;
  }*/

  get displayName() {
    return this.name;
  }
}
