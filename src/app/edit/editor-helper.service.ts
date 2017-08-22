import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class EditorHelperService {

  public getCurrentLine(editor: ElementRef): string {
    let textarea = editor.nativeElement;
    let lineStartPos = textarea.value.substring(0, textarea.selectionStart).lastIndexOf('\n') + 1;
    return textarea.value.substring(lineStartPos, textarea.selectionStart);
  }

  public insertAtCursor(editor: ElementRef,
                        value: string,
                        relAfterPos: number = value.length / 2): void {
    let textarea = editor.nativeElement;
    let startPos = textarea.selectionStart;
    let endPos = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, startPos)
      + value
      + textarea.value.substring(endPos, textarea.value.length);
    textarea.selectionStart = textarea.selectionEnd = startPos + relAfterPos;
  }

  public onEnter(editor: ElementRef) {
    let line = this.getCurrentLine(editor);

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
        this.insertAtCursor(editor, '\n' + space + orderType[0], space.length + 3);
        break;
      case 2:
        this.insertAtCursor(editor, '\n' + space + orderType[1], space.length + 3);
        break;
      default:
        this.insertAtCursor(editor, '\n', 1);
        break;
    }
  }
}
