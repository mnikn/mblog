import { AfterViewInit, Component, Inject } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/windowService';
import { ArticleContentProcessor } from '../../core/services/content/article-content-processor';
import * as $ from 'jquery';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})

export class EditorComponent implements AfterViewInit {

  private useInputMethod: boolean = false;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              @Inject('ArticleContentProcessor') public contentProcessor: ArticleContentProcessor,
              @Inject('WindowService') public windowService: WindowService) {

  }

  public ngAfterViewInit() {
    $('#editor')
      .on('compositionstart', () => {
        this.useInputMethod = true;
      })
      .on('compositionend', () => {
        this.useInputMethod = false;
        this.processMarkdown();
      })
      .on('input', () => {
        if (!this.useInputMethod) {
          this.processMarkdown();
        }
      });
  }

  private processMarkdown(): void {
    let value = $('#editor')[0].value;
    this.dataService.getSelected().content.mdContent = value;
    this.dataService.getSelected().content.htmlContent = this.contentProcessor
      .doProcess(value);
  }
}
