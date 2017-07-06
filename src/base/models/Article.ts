import {Content} from './Content';
import {Tag} from './Tag';

export class Article {
  id: number;
  title: string;
  content: Content;
  tag: Tag[];
}
