import { Component, Inject, Input } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/windowService';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  @Input() public showInfo: boolean = true;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              @Inject('WindowService') public windowService: WindowService) {
  }

}
