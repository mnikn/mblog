import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable()
export class ArticleFileProcessor {
  public getArticleFromDir(dir: string): Article[] {
    let fs = require('fs');
    let articles: Article[];
    let self = this;
    fs.readdir(require('storejs').get('blogDir')[0] + '/source/_posts', (err, data) => {
      for (let file of dir) {
        if (file.substr(file.lastIndexOf('.')) === '.md') {
          articles.push(self.getArticleFromFile(file));
        }
      }
    });
    return articles;
  }

  public getArticleFromFile(file: string): Article {
    let fs = require('fs');
    let article = new Article();
    fs.readFile(file, 'utf8', (err, data) => {
      console.log(data);
    });
    return article;
  }
}
