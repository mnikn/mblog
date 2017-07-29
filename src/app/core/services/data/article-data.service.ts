import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileService } from './article-file.service';
import { DataService } from './interface/data-service';
import { ArticleFilter } from '../../models/article-filter';
import { ARTICLES } from './mock-data';
import { ArticleSearchService } from './article-search.service';
import { connectableObservableDescriptor } from "rxjs/observable/ConnectableObservable";
declare let electron: any;

@Injectable()
export class ArticleDataService implements DataService<Article> {
  private selectedArticle: Article = new Article();
  private articles: Article[] = ARTICLES;
  private filter = new ArticleFilter();
  private searchService = new ArticleSearchService();
  private fileService = new ArticleFileService();

  public refresh() {
    this.articles = this.fileService.getArticles();
  }

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
    this.articles = this.fileService.getArticles();
    return this.searchService.googleLikeSearch(this.articles, this.filter);
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
