import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ArticleFileProcessor } from './article-file-processor';

@Injectable()
export class ArticleDataServiceImpl implements ArticleDataServiceImpl {

  private articleFileProcessor = new ArticleFileProcessor();
  private selectedArticle: Article = new Article();
  private articles: Article[];

  constructor() {
    this.refresh();
  }

  public refresh(): void {
    let dir = require('storejs').get('blogDir')[0] + '/source/_posts';
    this.articles = this.articleFileProcessor.getArticleFromDir('');
  }

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
  }

  public updateArticle(article) {
  }

  public removeArticle(article) {
  }

}
