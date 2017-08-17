import { CssProcessor } from '../../base/interfaces/content/css-processor';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleCssProcessor implements CssProcessor {

  public processHtmlWithCss(htmlText: string): string {
    return htmlText;
  }

}
