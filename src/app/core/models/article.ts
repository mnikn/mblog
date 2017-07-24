import { Content } from './content';
import { Tag } from './tag';

export class Article {
  public title: string;
  // -1: trash
  // 0: draft
  // 1: post
  public status: number;
  public content: Content;
  public tags: Tag[];
  public insertDate: Date;
}
