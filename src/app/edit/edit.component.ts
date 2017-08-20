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
    this.hotkeysService.mousetrap.bind('command+s', () => {
      this.toolbar.onSave(this.toolbar.popup);
      return false;
    });
    this.hotkeysService.mousetrap.bind('command+b', () => {
      this.editor.insertAtCursor('****');
      return false;
    });
    this.hotkeysService.mousetrap.bind('command+i', () => {
      this.editor.insertAtCursor('**');
      return false;
    });
    this.hotkeysService.mousetrap.bind('command+p', () => {
      this.editor.insertAtCursor('![]()');
      return false;
    });
    this.hotkeysService.mousetrap.bind('command+l', () => {
      this.editor.insertAtCursor('[]()', 1);
      return false;
    });
  }


}
