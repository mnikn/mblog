import { Component, Inject } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';
import { ArticleFilter } from '../../core/models/article-filter';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent {

  constructor(@Inject('IDataService<Article>') public dataService: IDataService<Article>) {
  }

  public onCancelClick() {
    this.dataService.getFilterService().setFilter(new ArticleFilter());
  }
}
