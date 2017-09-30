import { ElementRef, Injectable } from '@angular/core';
import { StringUtils } from "../../core/base/services/utils/string-utils";

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

    // count first space in string
    let firstSpaceCount = StringUtils.getFirstSpaceCount(line);

    let firstInsertStr = '';
    if (line.trim().startsWith('-') && line.match('[a-zA-Z0-9]')) {
      firstInsertStr = '- ';
    }
    if (line.trim().startsWith('+') && line.match('[a-zA-Z0-9]')) {
      firstInsertStr = '+ ';
    }

    let space = ' '.repeat(firstSpaceCount);
    let insertStr = '\n' + space + firstInsertStr;
    this.insertAtCursor(insertStr, space.length + 3);
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
