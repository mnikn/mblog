import { IMarkdownParser } from '../../base/interfaces/content/markdown-parser';
import { ArticleMarkdownParser } from './article-markdown-parser';
import { Injectable } from '@angular/core';
import { ICssProcessor } from '../../base/interfaces/content/css-processor';
import { ArticleCssProcessor } from './article-css-processor';

@Injectable()
export class ArticleContentProcessor {
  private mdParserService: IMarkdownParser;
  private cssProcessor: ICssProcessor;

  constructor() {
    this.mdParserService = new ArticleMarkdownParser();
    this.cssProcessor = new ArticleCssProcessor();
  }

  public registerMarkdownParser(parserService: IMarkdownParser) {
    this.mdParserService = parserService;
  }

  public registerCssProcessor(cssProcessor: ICssProcessor) {
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
