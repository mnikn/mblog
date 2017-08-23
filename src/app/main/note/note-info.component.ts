import { Component, Inject } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent {

  constructor(@Inject('IDataService<Article>') public dataService: IDataService<Article>) {
  }
}
