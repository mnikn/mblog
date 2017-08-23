import { NgModule } from '@angular/core';
import { ArticleDataService } from './services/data/article-data.service';
import { WindowService } from './services/window.service';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
  imports: [
    HotkeyModule
  ],
  providers: [
    WindowService,
    {provide: 'IDataService<Article>', useClass: ArticleDataService}
  ]
})

export class CoreModule {

}
