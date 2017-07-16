import { Content } from './content';
import { Tag } from './tag';

export class Article {
  public title: string;
  public content: Content;
  public tags: Tag[];
  public insertDate: Date;
}
