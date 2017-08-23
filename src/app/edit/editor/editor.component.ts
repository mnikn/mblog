import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/window.service';
import { ArticleContentProcessor } from '../../core/services/content/article-content-processor';
import { EditorService } from './editor.service';
import { IHotkeyService } from '../../core/base/interfaces/hotkey-service';
import { EditService } from '../edit.service';
declare let electron: any;

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})

export class EditorComponent implements AfterViewInit, OnDestroy {

  public service: EditorService;
  private useInputMethod: boolean = false;
  @ViewChild('editor') private editor: ElementRef;

  constructor(public windowService: WindowService,
              @Inject('IDataService<Article>') private dataService: IDataService<Article>,
              @Inject('ArticleContentProcessor') private contentProcessor: ArticleContentProcessor,
              @Inject('IHotkeyService') private hotkeyService: IHotkeyService,
              private editService: EditService,
              private render: Renderer2) {
  }

  public ngAfterViewInit() {
    this.setInputListener();
    this.initService();
    this.setHotKeys();
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
  }

  private initService(): void {
    this.service = new EditorService(this.editor);
    this.editService.editorService = this.service;
  }

  private setInputListener(): void {
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

  private processMarkdown(): void {
    let value = this.editor.nativeElement.value;
    this.dataService.getSelected().content.mdContent = value;
    this.dataService.getSelected().content.htmlContent = this.contentProcessor
      .doProcess(value);
  }

  private setHotKeys(): void {
    this.hotkeyService.bindKey('command+b', () => {
      this.service.insertBold();
    }).bindKey('command+i', () => {
      this.service.insertItalic();
    }).bindKey('command+p', () => {
      this.service.insertPicture();
    }).bindKey('command+l', () => {
      this.service.insertLink();
    }).bindKey('command+/', () => {
      this.service.insertComment();
    }).bindKey('command+`', () => {
      this.service.insertCode();
    }).bindKey('enter', () => {
      this.service.onEnter();
    });
  }

}
