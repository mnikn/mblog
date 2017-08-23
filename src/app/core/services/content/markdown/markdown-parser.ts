import { IMarkdownParser } from '../../../base/interfaces/content/markdown/markdown-parser';
import { Injectable } from '@angular/core';
declare let electron: any;

@Injectable()
export class MarkdownParser implements IMarkdownParser {

  private marked: any;

  constructor() {
    this.marked = electron.remote.require('marked');
    this.marked.setOptions({
      renderer: new this.marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  }

  public parseMarkdown(mdText: string): string {
    return this.marked(mdText);
  }

}
