import { Component, Inject } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/services/data/interface/data-service';
import * as _ from 'lodash';
import { ArticleFilter, FILTER_METHOD } from 'app/core/models/article-filter';


@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {


  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(new Article()) :
      this.dataService.setSelected(article);
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new ArticleFilter(FILTER_METHOD.FILTER_TAG, tag.name));
  };
}
