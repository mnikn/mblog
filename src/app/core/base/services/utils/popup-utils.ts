import { Injectable } from '@angular/core';
import { IPopup } from 'ng2-semantic-ui';

@Injectable()
export class PopupUtils {
  public static MEDIUM_TIME: number = 1000;

  public static openForWhile(popup: IPopup, time: number = PopupUtils.MEDIUM_TIME): void {
    if (popup === null) return;

    popup.open();
    setTimeout(() => {
      popup.close();
    }, time);
  }
}
