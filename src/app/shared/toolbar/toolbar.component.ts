import { Component, Inject } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/services/data/interface/data-service';
import { ArticleFilter, FILTER_METHOD } from 'app/core/models/article-filter';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {
  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
  }

  public onSearchEnter(value) {
    console.log(value);
    this.dataService.getFilteredList();
    this.dataService.setFilter(new ArticleFilter(FILTER_METHOD.FILTER_BLUR, value));
  }
}
