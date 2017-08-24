export class Filter {
  private _method: string;
  private _value: string;

  constructor(method = 'blur', value = '') {
    this._method = method;
    this._value = value;
  }

  get method(): string {
    return this._method;
  }

  set method(value: string) {
    this._method = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
