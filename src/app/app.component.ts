import { Component, OnInit } from '@angular/core';
import { Context } from './core/context';
import { TranslateService } from '@ngx-translate/core';
declare let electron: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }

  public ngOnInit(): void {
    this.initTranslation();
    this.initHotKey();
  }

  private initTranslation(): void {
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('en');

    let browserLanguage = this.translateService.getBrowserLang();
    this.translateService.use(browserLanguage.match(/en|zh/) ? browserLanguage : 'en');
  }

  private initHotKey(): void {
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
