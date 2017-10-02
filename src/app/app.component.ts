import { Component, OnInit } from '@angular/core';
import { Context } from './core/context';
declare let electron: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    let fs = electron.remote.require('fs');
    if (fs.existsSync('./dist/hotkey.json')) {
      Context.hotkey = JSON.parse(fs.readFileSync('./dist/hotkey.json'));
    } else {
      fs.writeFileSync('./dist/hotkey.json',
        JSON.stringify(Context.hotkey),
        'utf8');
    }
  }
}
