import { NgModule } from '@angular/core';
import { WindowService } from './base/services/window.service';
import { HotkeyModule } from 'angular2-hotkeys';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [
    TranslateModule
  ],
  imports: [
    HotkeyModule
  ],
  providers: [
    WindowService
  ]
})

export class CoreModule {

}
