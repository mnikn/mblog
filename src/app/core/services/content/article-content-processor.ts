import { MarkdownParser } from '../../base/interfaces/content/markdown-parser';
import { ArticleMarkdownParser } from './article-markdown-parser';
import { Injectable } from '@angular/core';
import { CssProcessor } from '../../base/interfaces/content/css-processor';
import { ArticleCssProcessor } from './article-css-processor';

@Injectable()
export class ArticleContentProcessor {
  private mdParserService: MarkdownParser;
  private cssProcessor: CssProcessor;

  constructor() {
    this.mdParserService = new ArticleMarkdownParser();
    this.cssProcessor = new ArticleCssProcessor();
  }

  public registerMarkdownParserService(parserService: MarkdownParser) {
    this.mdParserService = parserService;
  }

  public registerCssProcessor(cssProcessor: CssProcessor) {
    this.cssProcessor = cssProcessor;
  }

  public doProcess(mdText: string) {
    let htmlText = '';

    if (this.mdParserService) {
      htmlText = this.mdParserService.parseMarkdown(mdText);
    }
    if (this.cssProcessor) {
      htmlText = this.cssProcessor.processHtmlWithCss(htmlText);
    }
    return htmlText;
  }
}
