import { Component, Inject } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
  }

}
