import { Component, Inject, Input } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'editor-toolbar',
  templateUrl: './editor-toolbar.component.html'
})

export class EditorToolbarComponent {

  private originMdContent: string;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
    this.originMdContent = this.dataService.getSelected().content.mdContent;
  }

  public onBack() {
    this.dataService.getSelected().content.mdContent = this.originMdContent;
  }
}
