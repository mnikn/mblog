import { ICssProcessor } from '../../base/interfaces/content/css-processor';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleCssProcessor implements ICssProcessor {

  public processHtmlWithCss(htmlText: string): string {
    return htmlText;
  }

}
