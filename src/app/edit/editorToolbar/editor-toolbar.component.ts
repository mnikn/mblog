import { Component, Inject, Input } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'editor-toolbar',
  templateUrl: './editor-toolbar.component.html'
})

export class EditorToolbarComponent {

  private originMdContent: string;
  private isSaved: boolean;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
    this.originMdContent = this.dataService.getSelected().content.mdContent;
  }

  public onBack() {
    if (!this.isSaved) {
      this.dataService.getSelected().content.mdContent = this.originMdContent;
    }
  }

  public onSave() {
    this.dataService.update(this.dataService.getSelected());
    this.isSaved = true;
  }
}
