import {Component, Inject} from '@angular/core';
import {Article} from '../../core/models/article';
import {DataService} from '../../core/services/data/interface/data-service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
  }

  onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    if (article === this.dataService.getSelected()) {
      this.dataService.setSelected(new Article());
    } else {
      this.dataService.setSelected(article);
    }
  }

}
