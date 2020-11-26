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
  }

  get name() {
    return this.cn;
  }
}
