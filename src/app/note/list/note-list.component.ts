import { Component, Inject } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/services/data/interface/data-service';
import * as _ from 'lodash';


@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  public articles: Article[];

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
    this.articles = dataService.getList();
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(new Article()) :
      this.dataService.setSelected(article);
  }

  public onTagClick(tag): void {
    this.articles = this.dataService.getListByFilter((article) => {
      let has = false;
      _.forEach(article.tags, (t) => {
        has = has ? has : (t.name === tag.name);
      });
      return has;
    });
  }
}
