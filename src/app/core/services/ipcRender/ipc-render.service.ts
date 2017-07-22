import { Injectable } from '@angular/core';
declare let electron: any;

@Injectable()
export class IpcRenderService {

  private ipcRender;

  constructor() {
    this.ipcRender = electron.ipcRender;
  }

  public on(message: string, done) {
    return this.ipcRender.on(message, done);
  }

  public send(message: string, ...args) {
    this.ipcRender.send(message, args);
  }

  public api(action: string, ...args) {
    this.ipcRender.send('api', action, args);
    return new Promise((resolve, reject) => {
      this.ipcRender.once('${action}reply', (e, reply, status) => {
        if (!reply) {
          return reject(status);
        }
        return resolve(reply);
      });
    });
  }

  public dialog(action: string, ...args) {
    this.ipcRender.send('dialog', action, ...args);
  }

  public sendSync(message: string, ...args) {
    return this.ipcRender.sendSync(message, arguments);
  }

}
