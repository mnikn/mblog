import { Component, Inject } from '@angular/core';
import { ArticleDataManager } from '../core/services/article-data-manager';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent {

  constructor(@Inject('ArticleDataManager') public dataService: ArticleDataManager) {
  }
}
