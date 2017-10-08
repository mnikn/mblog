import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Article } from '../../core/models/article';
import { WindowService } from '../../core/base/services/window.service';
import { EditorService } from './editor.service';
import { EditService } from '../edit.service';
import { IContentProcessor } from '../../core/base/interfaces/content/content-processor';
import { MarkdownContentProcessor } from '../../core/services/content/markdown/markdown-content-processor';
import { ArticleDataService } from '../../core/services/data/article-data.service';
import { ActivatedRoute } from '@angular/router';
import { HotkeyService } from '../../core/base/services/hotkey.service';
declare let electron: any;
import * as _ from 'lodash';
import { Context } from "../../core/context";

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
              private hotkeyService: HotkeyService,
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
    this.render.listen(element, 'scroll', () => {
      this.editService.scrollPreviewSync(element.scrollTop);
    });
  }

  private processMarkdown(): void {
    let value = this.editor.nativeElement.value;
    this.article.content.mdContent = value;
    this.article.content.htmlContent = this.contentProcessor.doProcess(value);
    this.editService.article.content = this.article.content;
  }

  private setHotKeys(): void {
    this.hotkeyService.bindKey(Context.hotkey.insertBold, () => {
      this.service.insertBold();
    }).bindKey(Context.hotkey.insertItalic, () => {
      this.service.insertItalic();
    }).bindKey(Context.hotkey.insertPicture, () => {
      this.service.insertPicture();
    }).bindKey(Context.hotkey.insertLink, () => {
      this.service.insertLink();
    }).bindKey(Context.hotkey.insertComment, () => {
      this.service.insertComment();
    }).bindKey(Context.hotkey.insertCode, () => {
      this.service.insertCode();
    }).bindKey('enter', () => {
      this.service.onEnter();
    });
  }

}
