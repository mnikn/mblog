import { NgModule } from '@angular/core';
import { MockArticleDataService } from './services/data/mock-article-data.service';
import { ArticleDataService } from './services/data/article-data.service';

@NgModule({
  providers: [
    {provide: 'DataService<Article>', useClass: ArticleDataService}
  ]
})

export class CoreModule {

}
