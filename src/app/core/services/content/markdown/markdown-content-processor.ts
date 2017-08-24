import { IMarkdownParser } from '../../../base/interfaces/content/markdown/markdown-parser';
import { Injectable } from '@angular/core';
import { ICssProcessor } from '../../../base/interfaces/content/markdown/css-processor';
import { IMarkdownContentProcessor } from '../../../base/interfaces/content/markdown/markdown-content-processor';
import { CssProcessor } from './css-processor';
import { MarkdownParser } from './markdown-parser';

@Injectable()
export class MarkdownContentProcessor implements IMarkdownContentProcessor {
  private markdownParser: IMarkdownParser;
  private cssProcessor: ICssProcessor;

  constructor() {
    this.registerMarkdownParser(new MarkdownParser());
    this.registerCssProcessor(new CssProcessor());
  }

  public registerMarkdownParser(markdownParser: IMarkdownParser) {
    this.markdownParser = markdownParser;
  }

  public registerCssProcessor(cssProcessor: ICssProcessor) {
    this.cssProcessor = cssProcessor;
  }

  public doProcess(text: string): string {
    let htmlText = '';

    if (this.markdownParser) {
      htmlText = this.markdownParser.parseMarkdown(text);
    }
    if (this.cssProcessor) {
      htmlText = this.cssProcessor.processHtmlWithCss(htmlText);
    }
    return htmlText;
  }
}
