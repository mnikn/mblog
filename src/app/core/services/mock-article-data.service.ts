import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ARTICLES } from '../mock-data';
import { ArticleDataManager } from './article-data-manager';

@Injectable()
export class MockArticleDataService implements ArticleDataManager {
  public selectedArticle: Article = new Article();
  public articles: Article[] = ARTICLES;

  public getSelectedArticle(): Article {
    return this.selectedArticle;
  }

  public setSelectedArticle(article: Article) {
    this.selectedArticle = article;
  }

  public getArticles(filter) {
    return this.articles;
  }

  public addArticle(article) {
    this.articles.push(article);
  }

  public updateArticle(article) {
    const index = this.articles.findIndex(article);
    this.articles[index] = article;
    return index;
  }

  public removeArticle(article) {
    this.articles.reduce(article);
  }

}
