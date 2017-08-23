import { ICssProcessor } from '../../../base/interfaces/content/markdown/css-processor';
import { Injectable } from '@angular/core';

@Injectable()
export class CssProcessor implements ICssProcessor {

  public processHtmlWithCss(htmlText: string): string {
    return htmlText;
  }

}
