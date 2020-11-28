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
    return Array.isArray(this.cn) ? this.cn[0]: this.cn;
  }

  /*
  get id() {
    return this.name;
  }*/

  get displayName() {
    return this.name;
  }
}
