import { Injectable } from '@angular/core';

@Injectable()
export class Context {
  public static config: any;
  public static hotkey: any = {
    // main page
    menu: 'command+m',
    edit: 'enter',
    up: 'up',
    down: 'down',
    // editor
    back: 'command+shift+left',
    save: 'command+s',
    insertBold: 'command+b',
    insertItalic: 'command+i',
    insertPicture: 'command+p',
    insertLink: 'command+l',
    insertComment: 'command+/',
    insertCode: 'command+`',
  };
  public static command: any = {
    deploy: 'hexo g && hexo d',
    newPost: 'hexo n post',
    newDraft: 'hexo n draft',
  };
}
