import { Component, Inject } from '@angular/core';
import { Article } from '../../../core/models/article';
import { IDataService } from '../../../core/base/interfaces/data/data-service';
import { Filter } from 'app/core/models/filter';
import { WindowService } from '../../../core/services/window.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  constructor(@Inject('DataService') public dataService: IDataService<Article>,
              public windowService: WindowService) {
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(null) :
      this.dataService.setSelected(article);
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new Filter('tag', tag.name));
  };
}
