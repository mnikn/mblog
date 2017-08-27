import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/services/window.service';
import { EditorService } from './editor.service';
import { IHotkeyService } from '../../core/base/interfaces/hotkey-service';
import { EditService } from '../edit.service';
import { IContentProcessor } from '../../core/base/interfaces/content/content-processor';
import { MarkdownContentProcessor } from '../../core/services/content/markdown/markdown-content-processor';
declare let electron: any;
import * as _ from 'lodash';
import { ArticleDataService } from '../../article-data.service';
import { Router } from "@angular/router/src";
import { ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})

export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {

  public service: EditorService;
  private contentProcessor: IContentProcessor = new MarkdownContentProcessor();
  private useInputMethod: boolean = false;
  private article: Article;
  @ViewChild('editor') private editor: ElementRef;

  constructor(public windowService: WindowService,
              private dataService: ArticleDataService,
              @Inject('IHotkeyService') private hotkeyService: IHotkeyService,
              private editService: EditService,
              private render: Renderer2,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.paramMap.forEach((params) => {
      this.article = _.cloneDeep(this.dataService.getItem(Number(params.get('id'))));
    });
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
    this.editService.registerEditorService(this.service);
    this.editService.article = this.article;
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
    this.article.content.mdContent = value;
    this.article.content.htmlContent = this.contentProcessor.doProcess(value);
    this.editService.article.content = this.article.content;
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
