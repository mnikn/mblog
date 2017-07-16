import {Inject, Injectable} from '@angular/core';
import {IArticleDataService} from './IArticleDataService';
import {Article} from '../models/article';
import {ArticleDataProcessor} from './article_data_processor';

@Injectable()
export class ArticleDataService implements IArticleDataService {

  selectedArticle: Article = new Article();
  articles: Article[];

  constructor(@Inject('ArticleDataProcessor') private articleDataProcessor: ArticleDataProcessor) {
  }

  getSelectedArticle(): Article {
    return this.selectedArticle;
  }

  setSelectedArticle(article: Article) {
    this.selectedArticle = article;
  }

  getArticles(filter) {
    let fs = require('fs');
    fs.readdir(require('storejs').get('blogDir')[0] + '/source/_posts', function (err, data) {
      for (let file of data) {
        if (file.substr(file.lastIndexOf('.')) === '.md') {
          console.log(file);
        }
      }
    });
  }

  addArticle(article) {
  }

  updateArticle(article) {
  }

  removeArticle(article) {
  }

}
