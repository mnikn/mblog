import { Component, Inject } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';
import { ArticleDataService } from "../../article-data.service";

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent {

  constructor(public dataService: ArticleDataService) {
  }
}
