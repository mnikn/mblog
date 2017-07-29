import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ARTICLES } from './mock-data';
import { DataService } from './interface/data-service';
import * as _ from 'lodash';
import { ArticleSearchService } from './article-search.service';
import { ArticleFilter } from '../../models/article-filter';

@Injectable()
export class MockArticleDataService implements DataService<Article> {

  private selectedArticle: Article = new Article();
  private articles: Article[] = ARTICLES;
  private filter = new ArticleFilter();
  private articleSearchService = new ArticleSearchService();

  public getSelected(): Article {
    return this.selectedArticle;
  }

  public setSelected(article: Article) {
    this.selectedArticle = article;
  }

  public getList(): Article[] {
    return this.articles;
  }

  public getFilteredList(): Article[] {
    return this.articleSearchService.googleLikeSearch(this.articles, this.filter);
  }

  public getFilter(): ArticleFilter {
    return this.filter;
  }

  public setFilter(filter: ArticleFilter) {
    this.filter = filter;
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
