import { IContentProcessor } from '../content-processor';
import { IMarkdownParser } from './markdown-parser';
import { ICssProcessor } from './css-processor';

export interface IMarkdownContentProcessor extends IContentProcessor {
  registerMarkdownParser(markdownParser: IMarkdownParser);
  registerCssProcessor(cssProcessor: ICssProcessor);
}
