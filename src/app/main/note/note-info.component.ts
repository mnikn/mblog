import { Component } from '@angular/core';
import { ArticleDataService } from '../../core/services/data/article-data.service';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent {

  constructor(public dataService: ArticleDataService) {
  }
}
