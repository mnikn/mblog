import {Injectable} from '@angular/core';
import {Article} from '../models/Article';

@Injectable()
export class ArticleDataService implements IArticleDataService {
  articles: Article[];

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
