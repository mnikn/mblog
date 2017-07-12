import {Component, Inject} from '@angular/core';
import {IArticleDataService} from '../../base/services/IArticleDataService';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  constructor(@Inject('IArticleDataService') public dataService: IArticleDataService) {
  }

}
