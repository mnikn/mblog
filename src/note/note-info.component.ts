import { Component, Inject } from '@angular/core';
import { ArticleDataService } from '../core/services/article-data-service';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent {

  constructor(@Inject('ArticleDataService') public dataService: ArticleDataService) {
  }
}
