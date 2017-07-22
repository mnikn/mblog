import { Injectable } from '@angular/core';
import { Content } from '../models/content';
import { Article } from '../models/article';
import { Tag } from '../models/tag';

@Injectable()
export class ArticleFileProcessor {

  public getArticleFromDir(dir: string): Article[] {
    let fs = require('fs');
    console.log(fs);
    let articles: Article[] = [];
    let self = this;
    fs.readdir(dir, (err, data) => {
      console.log(data);
      for (let file of data) {
        if (file.substr(file.lastIndexOf('.')) === '.md') {
          articles.push(self.getArticleFromFile(file));
        }
      }
    });
    return articles;
  }

  public getArticleFromFile(file: string): Article {
    let fs = require('fs');
    let readline = require('readline');

    let article = new Article();
    article.content = new Content();
    let buffer = fs.createReadStream(file);

    let objReadline = readline.createInterface({
      input: buffer
    });

    let infoLines = 0;
    objReadline.on('line', (line) => {
      if (infoLines < 2 && line.includes('title: ')) {
        let startIndex = line.indexOf('title: ') + 'title: '.length;
        article.title = line.substring(startIndex);
      } else if (infoLines < 2 && line.includes('date: ')) {
        let startIndex = line.indexOf('date: ') + 'date: '.length;
        article.insertDate.setDate(Date.parse(line.substring(startIndex)));
      } else if (infoLines < 2 && line.includes('tags: ')) {
        article.tags = [];
        let trimLine = line.substring(line.indexOf('[') + 1, line.IndexOf(']'));
        for (let tagStr of trimLine.split(',')) {
          article.tags.push(new Tag(tagStr));
        }
      } else if (infoLines >= 2) {
        article.content.mdContent = line;
      } else if (line === '---') {
        ++infoLines;
      }
    });
    return article;
  }
}
