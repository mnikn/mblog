import { Injectable } from '@angular/core';
import { Tag } from '../../models/tag';
import { Article } from '../../models/article';
import { Content } from '../../models/content';
import { ArticleContentProcessor } from './article-content-processor';
declare let electron: any;

@Injectable()
export class ArticleFileReader {
  private markdownProcessor: ArticleContentProcessor = new ArticleContentProcessor();

  public getArticleFromFile(file: string): Article {
    let fs = electron.remote.require('fs');
    let readline = electron.remote.require('readline');

    let article = new Article();
    article.content = new Content();
    article.content.mdContent = '';

    let infoLines = 0;
    let lines = fs.readFileSync(file).toString().split('\n');
    for (let line of lines) {
      if (infoLines < 2 && line.includes('title: ')) {
        let startIndex = line.indexOf('title: ') + 'title: '.length;
        article.title = line.substring(startIndex);
      } else if (infoLines < 2 && line.includes('date: ')) {
        let startIndex = line.indexOf('date: ') + 'date: '.length;
        article.insertDate = new Date(line.substring(startIndex).split(' ')[0]);
      } else if (infoLines < 2 && line.includes('tags: ')) {
        article.tags = [];
        let trimLine = line.substring(line.indexOf('[') + 1, line.indexOf(']'));
        for (let tagStr of trimLine.split(',')) {
          article.tags.push(new Tag(tagStr));
        }
      } else if (infoLines >= 2) {
        article.content.mdContent += (line + '\n');
      } else if (line === '---') {
        ++infoLines;
      }
    }
    article.content.htmlContent = this.markdownProcessor.doProcess(article.content.mdContent);
    return article;
  }
}
