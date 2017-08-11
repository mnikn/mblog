import { Component, Inject } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})

export class EditorComponent {

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {

  }
}
