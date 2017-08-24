import { NgModule } from '@angular/core';
import { WindowService } from './services/window.service';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
  imports: [
    HotkeyModule
  ],
  providers: [
    WindowService
  ]
})

export class CoreModule {

}
