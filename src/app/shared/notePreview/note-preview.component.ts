import { Component, Input } from '@angular/core';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/base/services/window.service';
import { Tag } from '../../core/models/tag';
import { Filter } from '../../core/models/filter';
import { ArticleDataService } from '../../core/services/data/article-data.service';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent {

  @Input() public showInfo: boolean = true;
  @Input() public article: Article = new Article();

  constructor(public windowService: WindowService,
              private dataService: ArticleDataService) {
  }

  public onTagClick(tag: Tag): void {
    this.dataService.setFilter(new Filter('tag', tag.name));
  }

}
