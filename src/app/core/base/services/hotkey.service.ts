import { IHotkeyService } from '../interfaces/hotkey-service';
import { HotkeysService } from 'angular2-hotkeys';
import { Injectable } from '@angular/core';

@Injectable()
export class HotkeyService implements IHotkeyService {

  constructor(private service: HotkeysService) {
  }

  public clear(): void {
    this.service.mousetrap.reset();
  }

  public bindKey(key: string, action: () => void): IHotkeyService {
    this.service.mousetrap.bind(key, () => {
      action();
      return false;
    });
    return this;
  }
}
