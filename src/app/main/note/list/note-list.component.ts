import { Component, Inject } from '@angular/core';
import { Article } from '../../../core/models/article';
import { IDataService } from '../../../core/base/interfaces/data/data-service';
import { ArticleFilter } from 'app/core/models/article-filter';
import { FILTER_METHOD } from '../../../core/base/params/filter-method';
import { WindowService } from '../../../core/services/window.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  constructor(@Inject('IDataService<Article>') public dataService: IDataService<Article>,
              public windowService: WindowService) {
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(null) :
      this.dataService.setSelected(article);
  }

  public onTagClick(tag): void {
    this.dataService
      .getFilterService()
      .setFilter(new ArticleFilter(FILTER_METHOD.FILTER_TAG, tag.name));
  };
}
