import {Component, Inject} from '@angular/core';
import {IArticleDataService} from '../base/services/IArticleDataService';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent {

  constructor(@Inject('IArticleDataService') public dataService: IArticleDataService) {
  }
}
