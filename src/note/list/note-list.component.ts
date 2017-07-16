import {Component, Inject} from '@angular/core';
import {Article} from '../../core/models/article';
import {ArticleDataService} from '../../core/services/article-data-service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent {

  constructor(@Inject('ArticleDataService') public dataService: ArticleDataService) {
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
