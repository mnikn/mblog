import { Inject, Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ArticleFileProcessor } from './article-file-processor';

@Injectable()
export class ArticleDataService implements ArticleDataService {

  public selectedArticle: Article = new Article();
  public articles: Article[];

  constructor(@Inject('ArticleFileProcessor') private articleFileProcessor: ArticleFileProcessor) {
  }

  public getSelectedArticle(): Article {
    return this.selectedArticle;
  }

  public setSelectedArticle(article: Article) {
    this.selectedArticle = article;
  }

  public getArticles(filter) {
    let fs = require('fs');
    fs.readdir(require('storejs').get('blogDir')[0] + '/source/_posts', function (err, data) {
      for (let file of data) {
        if (file.substr(file.lastIndexOf('.')) === '.md') {
          console.log(file);
        }
      }
    });
  }

  public addArticle(article) {
  }

  public updateArticle(article) {
  }

  public removeArticle(article) {
  }

}
