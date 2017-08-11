import { Component, Inject } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/windowService';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})

export class EditorComponent {

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              @Inject('WindowService') public windowService: WindowService) {

  }
}
