import { Injectable } from '@angular/core';

@Injectable()
export class FuncUtils {
  public static exec(func: (...args) => any, ...args): void {
    if (func && func !== null) {
      func(args);
    }
  }
}
