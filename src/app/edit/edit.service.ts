import { Injectable } from '@angular/core';
import { EditorService } from './editor/editor.service';

/**
 * EditService is a channel for editor,editor-toolbar and preview communication
 */
@Injectable()
export class EditService {
  public editorService: EditorService;
}
