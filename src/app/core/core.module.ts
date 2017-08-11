import { NgModule } from '@angular/core';
import { ArticleDataService } from './services/data/article-data.service';
import { WindowService } from './services/windowService';

@NgModule({
  providers: [
    {provide: 'DataService<Article>', useClass: ArticleDataService},
    {provide: 'WindowService', useClass: WindowService}
  ]
})

export class CoreModule {

}
