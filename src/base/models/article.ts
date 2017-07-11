import {Content} from './content';
import {Tag} from './tag';

export class Article {
  id: number;
  title: string;
  content: Content;
  tags: Tag[];
  insertDate: Date;
}
