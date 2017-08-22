import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HotkeysService } from 'angular2-hotkeys';
import { EditorToolbarComponent } from './editorToolbar/editor-toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { EditorHelperService } from './editor-helper.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit, OnDestroy {

  @ViewChild(EditorComponent) editor: EditorComponent;
  @ViewChild(EditorToolbarComponent) toolbar: EditorToolbarComponent;

  constructor(private hotkeysService: HotkeysService,
              @Inject('EditorHelperService') private editorHelper: EditorHelperService) {
  }

  public ngOnInit(): void {
    this.setHotKeys();
  }

  public ngOnDestroy(): void {
    this.hotkeysService.mousetrap.reset();
  }

  private setHotKeys(): void {
    let element = this.editor.editor;
    this.doSetHotKey('command+s', () => {
      this.toolbar.onSave(this.toolbar.popup);
    }).doSetHotKey('command+shift+left', () => {
      this.toolbar.onBack();
    }).doSetHotKey('command+b', () => {
      this.editorHelper.insertAtCursor(element, '****');
    }).doSetHotKey('command+i', () => {
      this.editorHelper.insertAtCursor(element, '**');
    }).doSetHotKey('command+p', () => {
      this.editorHelper.insertAtCursor(element, '![]()');
    }).doSetHotKey('command+p', () => {
      this.editorHelper.insertAtCursor(element, '![]()');
    }).doSetHotKey('command+l', () => {
      this.editorHelper.insertAtCursor(element, '[]()', 1);
    }).doSetHotKey('command+/', () => {
      this.editorHelper.insertAtCursor(element, '<!---->', 4);
    }).doSetHotKey('command+`', () => {
      this.editorHelper.insertAtCursor(element, '```\n```');
    }).doSetHotKey('enter', () => {
      this.editorHelper.onEnter(element);
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
