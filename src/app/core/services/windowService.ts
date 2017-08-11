import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class WindowService {
  public getScreenHeight(): number {
    return $(window).height();
  }
}
