import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {ARTICLES} from '../mockData';
import {IArticleDataService} from './IArticleDataService';

@Injectable()
export class ArticleDataService implements IArticleDataService {
  articles: Article[] = ARTICLES;

  GetArticles(filter) {
    return this.articles;
  }

  AddArticle(article) {
    this.articles.push(article);
  }

  UpdateArticle(article) {
    const index = this.articles.findIndex(article);
    this.articles[index] = article;
    return index;
  }

  RemoveArticle(article) {
    this.articles.reduce(article);
  }

}
