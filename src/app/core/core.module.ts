import { NgModule } from '@angular/core';
import { ArticleDataService } from './services/data/article-data.service';
import { ArticlePagerService } from './services/data/article-pager.service';

@NgModule({
  providers: [
    {provide: 'DataService<Article>', useClass: ArticleDataService},
    {provide: 'Pager<Article>', useClass: ArticlePagerService},
  ]
})

export class CoreModule {

}
