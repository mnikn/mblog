import { Content } from './content';
import { Tag } from './tag';
import { DatePipe } from '@angular/common';
import { IIdentifiable } from '../base/interfaces/models/identifiable';

export class Article implements IIdentifiable {
  private _id: number;
  private _title: string = '标题';
  // -1: trash
  // 0: draft
  // 1: post
  private _status: number = 1;
  private _content: Content = new Content();
  private _tags: Tag[] = [];
  private _insertDate: Date = new Date();
  private _fileName: string;

  public toString(): string {
    let str = '';
    str += '---\n';
    str += 'title: ' + this._title + '\n';
    str += 'date: ' + new DatePipe('en-us')
        .transform(this._insertDate, 'yyyy-MM-dd hh:mm:ss') + '\n';
    str += 'tags: [';
    for (let i = 0; i < this._tags.length; ++i) {
      str += this._tags[i].name;
      if (i !== this._tags.length - 1) {
        str += ',';
      }
    }
    str += ']\n';
    str += '---\n';
    str += this._content.mdContent;
    return str;
  }

  public tagsToString(): string {
    return this._tags.map((tag) => {
      return tag.toString();
    }).join(',');
  }

  public setStringTags(tags: string) {
    this._tags = [];
    tags.split(',').forEach((tag) => {
      this._tags.push(new Tag(tag));
    });
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  get insertDate(): Date {
    return this._insertDate;
  }

  set insertDate(value: Date) {
    this._insertDate = value;
  }

  get tags(): Tag[] {
    return this._tags;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }

  get content(): Content {
    return this._content;
  }

  set content(value: Content) {
    this._content = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
