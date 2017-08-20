import { Component, OnDestroy, ViewChild } from '@angular/core';
import { HotkeysService } from 'angular2-hotkeys';
import { EditorToolbarComponent } from './editorToolbar/editor-toolbar.component';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnDestroy {

  @ViewChild(EditorComponent) editor: EditorComponent;
  @ViewChild(EditorToolbarComponent) toolbar: EditorToolbarComponent;

  constructor(private hotkeysService: HotkeysService) {
    this.setHotKeys();
  }

  public ngOnDestroy(): void {
    this.hotkeysService.mousetrap.reset();
  }

  private setHotKeys(): void {
    this.doSetHotKey('command+s', () => {
      this.toolbar.onSave(this.toolbar.popup);
    }).doSetHotKey('command+b', () => {
      this.editor.insertAtCursor('****');
    }).doSetHotKey('command+i', () => {
      this.editor.insertAtCursor('**');
    }).doSetHotKey('command+p', () => {
      this.editor.insertAtCursor('![]()');
    }).doSetHotKey('command+p', () => {
      this.editor.insertAtCursor('![]()');
    }).doSetHotKey('command+l', () => {
      this.editor.insertAtCursor('[]()', 1);
    }).doSetHotKey('command+/', () => {
      this.editor.insertAtCursor('<!---->', 4);
    }).doSetHotKey('command+`', () => {
      this.editor.insertAtCursor('```\n```');
    });
  }

  private doSetHotKey(key: string, callback) {
    this.hotkeysService.mousetrap.bind(key, () => {
      callback();
      return false;
    });
    return this;
  }

}
