import { MarkdownParser } from '../../base/interfaces/content/markdown-parser';
declare let electron: any;

export class ArticleMarkdownParser implements MarkdownParser {

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
