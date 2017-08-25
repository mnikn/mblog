import { Component, Inject, Input } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/window.service';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  @Input() public showInfo: boolean = true;
  @Input() public article: Article = new Article();

  constructor(public windowService: WindowService) {
  }

}
