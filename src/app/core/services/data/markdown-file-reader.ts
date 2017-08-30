import { Injectable } from '@angular/core';
import { Tag } from '../../models/tag';
import { Article } from '../../models/article';
import { IMarkdownContentProcessor } from '../../base/interfaces/content/markdown/markdown-content-processor';
import { MarkdownContentProcessor } from '../content/markdown/markdown-content-processor';
declare let electron: any;

@Injectable()
export class MarkdownFileReader {
  private markdownProcessor: IMarkdownContentProcessor = new MarkdownContentProcessor();

  public getArticleFromFile(file: string): Article {
    let fs = electron.remote.require('fs');
    let readline = electron.remote.require('readline');

    let article = new Article();

    let infoLines = 0;
    let lines = fs.readFileSync(file).toString().split('\n');
    for (let line of lines) {
      if (infoLines < 2 && line.includes('title: ')) {
        article.title = this.parseTitle(line);
      } else if (infoLines < 2 && line.includes('date: ')) {
        article.insertDate = this.parseTime(line);
      } else if (infoLines < 2 && line.includes('tags: ')) {
        article.tags = this.parseTags(line);
      } else if (infoLines >= 2) {
        article.content.mdContent += (line + '\n');
      } else if (line === '---') {
        ++infoLines;
      }
    }
    article.content.htmlContent = this.markdownProcessor.doProcess(article.content.mdContent);
    article.fileName = file;
    return article;
  }

  private parseTitle(line: string): string {
    let startIndex = line.indexOf('title: ') + 'title: '.length;
    return line.substring(startIndex);
  }

  private parseTime(line: string): Date {
    let startIndex = line.indexOf('date: ') + 'date: '.length;
    let str = line.substring(startIndex);
    let date = str.split('-');
    let day = date[2].split(' ');
    let time = day[1].split(':');
    return new Date(Number.parseInt(date[0]),
      Number.parseInt(date[1]) - 1,
      Number.parseInt(day[0]),
      Number.parseInt(time[0]),
      Number.parseInt(time[1]),
      Number.parseInt(time[2]));
  }

  private parseTags(line: string): Tag[] {
    let trimLine = line.substring(line.indexOf('[') + 1, line.indexOf(']'));
    let tags: Tag[] = [];
    for (let tagStr of trimLine.split(',')) {
      tags.push(new Tag(tagStr));
    }
    return tags;
  }
}
