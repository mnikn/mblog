import { Injectable } from '@angular/core';
import { IPopup } from 'ng2-semantic-ui';

@Injectable()
export class PopupUtils {
  public static openForWhile(popup: IPopup, time: number): void {
    popup.open();
    setTimeout(() => {
      popup.close();
    }, time);
  }
}
