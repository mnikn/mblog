import { Component, Inject } from '@angular/core';
import { ArticleDataService } from '../../core/services/article-data-service';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  constructor(@Inject('ArticleDataService') public dataService: ArticleDataService) {
  }

}
