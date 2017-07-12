import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {ARTICLES} from '../mockData';
import {IArticleDataService} from './IArticleDataService';

@Injectable()
export class ArticleDataService implements IArticleDataService {
  selectedArticle: Article = new Article();
  articles: Article[] = ARTICLES;

  getSelectedArticle(): Article {
    return this.selectedArticle;
  }

  setSelectedArticle(article: Article) {
    this.selectedArticle = article;
  }

  getArticles(filter) {
    return this.articles;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  updateArticle(article) {
    const index = this.articles.findIndex(article);
    this.articles[index] = article;
    return index;
  }

  removeArticle(article) {
    this.articles.reduce(article);
  }

}
