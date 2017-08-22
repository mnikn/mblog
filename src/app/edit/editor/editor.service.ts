import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class EditorService {
  private editor: any;

  constructor(editor: ElementRef) {
    this.editor = editor.nativeElement;
  }

  public insertBold(): void {
    this.insertAtCursor('****');
  }

  public insertItalic(): void {
    this.insertAtCursor('**');
  }

  public insertPicture(): void {
    this.insertAtCursor('![]()');
  }

  public insertLink(): void {
    this.insertAtCursor('[]()', 1);
  }

  public insertComment(): void {
    this.insertAtCursor('<!---->', 4);
  }

  public insertCode(): void {
    this.insertAtCursor('```\n```');
  }

  public onEnter() {
    let line = this.getCurrentLine();

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

  private getCurrentLine(): string {
    let lineStartPos = this.editor.value
        .substring(0, this.editor.selectionStart)
        .lastIndexOf('\n') + 1;
    return this.editor.value
      .substring(lineStartPos, this.editor.selectionStart);
  }

  private insertAtCursor(value: string,
                         relAfterPos: number = value.length / 2): void {
    let startPos = this.editor.selectionStart;
    let endPos = this.editor.selectionEnd;
    this.editor.value = this.editor.value.substring(0, startPos)
      + value
      + this.editor.value.substring(endPos, this.editor.value.length);
    this.editor.selectionStart = this.editor.selectionEnd = startPos + relAfterPos;
  }
}
