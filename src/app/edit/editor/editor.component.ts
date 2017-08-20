import { AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/windowService';
import { ArticleContentProcessor } from '../../core/services/content/article-content-processor';
declare let electron: any;

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})

export class EditorComponent implements AfterViewInit {

  private useInputMethod: boolean = false;
  @ViewChild('editor') private editor: ElementRef;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              @Inject('ArticleContentProcessor') public contentProcessor: ArticleContentProcessor,
              @Inject('WindowService') public windowService: WindowService,
              private render: Renderer2) {
  }

  public ngAfterViewInit() {
    let element = this.editor.nativeElement;
    this.render.listen(element, 'compositionstart', () => {
      this.useInputMethod = true;
    });
    this.render.listen(element, 'compositionend', () => {
      this.useInputMethod = false;
      this.processMarkdown();
    });
    this.render.listen(element, 'input', () => {
      if (!this.useInputMethod) {
        this.processMarkdown();
      }
    });
  }

  public insertAtCursor(value: string, relAfterPos: number = value.length / 2): void {
    let textarea = this.editor.nativeElement;
    console.log(textarea.selectionStart);
    let startPos = textarea.selectionStart;
    let endPos = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, startPos)
      + value
      + textarea.value.substring(endPos, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = startPos + relAfterPos;
  }

  private processMarkdown(): void {
    let value = this.editor.nativeElement.value;
    this.dataService.getSelected().content.mdContent = value;
    this.dataService.getSelected().content.htmlContent = this.contentProcessor
      .doProcess(value);
  }


}
