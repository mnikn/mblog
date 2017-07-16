import {Injectable} from '@angular/core';
import {Article} from '../models/article';

@Injectable()
export class ArticleDataProcessor {
  getArticleFromDir(dir: string): Article[] {
    let fs = require('fs');
    let articles = new Article()[];
    let self = this;
    fs.readdir(require('storejs').get('blogDir')[0] + '/source/_posts', function (err, data) {
      for (let file of dir) {
        if (file.substr(file.lastIndexOf('.')) === '.md') {
          articles.add(self.getArticleFromFile(file));
        }
      }
    };
    return articles;
  }

  getArticleFromFile(file: string): Article {
    let fs = require('fs');
    let article = new Article();
    fs.readFile(file, 'utf8', function (err, data) {
      console.log(data);
    });
    return article;
  }
}
