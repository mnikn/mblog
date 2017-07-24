import { NgModule } from '@angular/core';
import { MockArticleDataService } from './services/data/mock-article-data.service';

@NgModule({
  providers: [
    {provide: 'DataService<Article>', useClass: MockArticleDataService}
  ]
})

export class CoreModule {

}
