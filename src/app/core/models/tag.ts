export class Tag {
  private _name: string = '';

  constructor(name: string) {
    this._name = name;
  }

  public toString(): string {
    return this._name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
