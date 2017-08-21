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
    let startPos = textarea.selectionStart;
    let endPos = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, startPos)
      + value
      + textarea.value.substring(endPos, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = startPos + relAfterPos;
  }

  public insertEnter(): void {
    let textarea = this.editor.nativeElement;
    let lineStartPos = textarea.value.substring(0, textarea.selectionStart).lastIndexOf('\n') + 1;
    let line = textarea.value.substring(lineStartPos, textarea.selectionStart);

    let order = 0;
    let orderType = ['- ', '+ '];
    let orderIndex = line.indexOf(orderType[0]);
    if (orderIndex !== -1 && line.match('[a-zA-Z0-9]')) {
      order = 1;
    } else if (line.indexOf(orderType[1]) !== -1 && line.match('[a-zA-Z0-9]')) {
      orderIndex = line.indexOf('+ ');
      order = 2;
    }

    let space = '';
    if (orderIndex !== -1) {
      space = ' '.repeat(orderIndex);
    }
    switch (order) {
      case 1:
        this.insertAtCursor('\n' + space + orderType[0], space.length + 3);
        break;
      case 2:
        this.insertAtCursor('\n' + space + orderType[1], space.length + 3);
        break;
      default:
        this.insertAtCursor('\n', 1);
        break;
    }
  }

  private processMarkdown(): void {
    let value = this.editor.nativeElement.value;
    this.dataService.getSelected().content.mdContent = value;
    this.dataService.getSelected().content.htmlContent = this.contentProcessor
      .doProcess(value);
  }


}
