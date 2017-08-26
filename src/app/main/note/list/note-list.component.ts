import { Component } from '@angular/core';
import { Article } from '../../../core/models/article';
import { Filter } from 'app/core/models/filter';
import { WindowService } from '../../../core/services/window.service';
import { ArticleDataService } from '../../../article-data.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  constructor(public dataService: ArticleDataService,
              public windowService: WindowService) {
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(-1) :
      this.dataService.setSelected(article.id);
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new Filter('tag', tag.name));
  };
}
