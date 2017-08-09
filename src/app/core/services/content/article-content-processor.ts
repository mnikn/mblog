import { MarkdownParser } from '../../base/interfaces/content/markdown-parser';
import { ArticleMarkdownParser } from './article-markdown-parser';
export class ArticleContentProcessor {
  private mdParserService: MarkdownParser;

  constructor() {
    this.mdParserService = new ArticleMarkdownParser();
  }

  public registerMarkdownParserService(parserService: MarkdownParser) {
    this.mdParserService = parserService;
  }

  public doProcess(mdText: string) {
    let htmlText = '';
    if (this.mdParserService) {
      htmlText = this.mdParserService.parseMarkdown(mdText);
    }
    return htmlText;
  }
}
