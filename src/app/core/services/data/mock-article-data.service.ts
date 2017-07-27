import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ARTICLES } from './mock-data';
import { DataService } from './interface/data-service';
import * as _ from 'lodash';
import { ArticleSearchService } from './article-search.service';

@Injectable()
export class MockArticleDataService implements DataService<Article> {

  public selectedArticle: Article = new Article();
  public articles: Article[] = ARTICLES;
  private articleSearchService = new ArticleSearchService();

  public getSelected(): Article {
    return this.selectedArticle;
  }

  public setSelected(article: Article) {
    this.selectedArticle = article;
  }

  public getList(searchValue?: string): Article[] {
    return this.articleSearchService.googleLikeSearch(this.articles, searchValue);
  }

  public getListByFilter(filter?: (value: Article) => boolean): Article[] {
    return _.filter(this.articles, filter);
  }

  public add(article) {
    this.articles.push(article);
  }

  public update(article) {
    const index = this.articles.findIndex(article);
    this.articles[index] = article;
    return index;
  }

  public remove(article) {
    this.articles.reduce(article);
  }

}
