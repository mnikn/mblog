import { Component, Inject } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/services/data/interface/data-service';
import * as _ from 'lodash';
import { Filter } from 'app/core/models/filter';


@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  public articles: Article[];

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
    this.articles = dataService.getFilteredList();
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(new Article()) :
      this.dataService.setSelected(article);
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new Filter(true, tag.name));
    this.articles = this.dataService.getFilteredList();
  };
}
