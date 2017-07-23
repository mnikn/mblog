import { Component, Inject } from '@angular/core';
import { ArticleDataManager } from '../../core/services/article-data-manager';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  constructor(@Inject('ArticleDataManager') public dataService: ArticleDataManager) {
  }

}
