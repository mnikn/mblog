import {Component, Inject} from '@angular/core';
import {Article} from '../../base/models/article';
import {IArticleDataService} from '../../base/services/IArticleDataService';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  constructor(@Inject('IArticleDataService') public dataService: IArticleDataService) {
  }

  onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    if (article === this.dataService.getSelectedArticle()) {
      this.dataService.setSelectedArticle(new Article());
    } else {
      this.dataService.setSelectedArticle(article);
    }
  }

}
