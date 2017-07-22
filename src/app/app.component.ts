import { Component } from '@angular/core';
import { IpcRenderService } from '../core/services/ipcRender/ipc-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [IpcRenderService]
})
export class AppComponent {
}
