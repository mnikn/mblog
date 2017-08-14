import { Content } from './content';
import { Tag } from './tag';
import { DatePipe } from '@angular/common';

export class Article {
  public id: number;
  public title: string;
  // -1: trash
  // 0: draft
  // 1: post
  public status: number;
  public content: Content;
  public tags: Tag[];
  public insertDate: Date;

  public toString(): string {
    let str = '';
    str += '---\n';
    str += 'title: ' + this.title + '\n';
    str += 'date: ' + new DatePipe('en-us')
        .transform(this.insertDate, 'yyyy-MM-dd hh:mm:ss') + '\n';
    str += 'tags: [';
    for (let i = 0; i < this.tags.length; ++i) {
      str += this.tags[i].name;
      if (i !== this.tags.length - 1) {
        str += ',';
      }
    }
    str += ']\n';
    str += '---\n';
    str += this.content.mdContent;
    return str;
  }
}
