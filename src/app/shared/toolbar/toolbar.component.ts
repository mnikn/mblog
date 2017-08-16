import { Component, Inject } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/base/interfaces/data-service';
import { ArticleFilter } from 'app/core/models/article-filter';
import { FILTER_METHOD } from '../../core/base/params/filter-method';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {
  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
  }

  public onAddClick() {
    let article = new Article();
    this.dataService.add(article);
  }

  public onRefresh() {
    this.dataService.refresh();
  }

  public onSearchEnter(value) {
    this.dataService
      .getFilterService()
      .setFilter(new ArticleFilter(FILTER_METHOD.FILTER_BLUR, value));
  }
}
