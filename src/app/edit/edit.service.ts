import { ElementRef, Injectable } from '@angular/core';
import { EditorService } from './editor/editor.service';
import { Article } from '../core/models/article';

/**
 * EditService is a channel for editor,editor-toolbar and preview communication
 */
@Injectable()
export class EditService {
  public article: Article = new Article();
  private editorService: EditorService;
  private previewView: ElementRef;

  public registerEditorService(service: EditorService) {
    this.editorService = service;
  }

  public registerPreviewView(view: ElementRef) {
    this.previewView = view;
  }

  public scrollPreviewSync(pos: number) {
    this.previewView.nativeElement.scrollTop = pos;
  }
}
