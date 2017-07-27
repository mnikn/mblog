import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileProcessor } from './article-file-processor';
import { DataService } from './interface/data-service';
import * as _ from 'lodash';
import { Tag } from '../../models/tag';

@Injectable()
export class ArticleDataService implements DataService<Article> {


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

  public getSelected(): Article {
    return this.selectedArticle;
  }

  public setSelected(data: Article) {
    this.selectedArticle = data;
  }

  public getList(searchValue?: string): Article[] {
    return this.articles;
  }

  public getListByFilter(filter?: (value: Article) => boolean): Article[] {
    return undefined;
  }

  public add(data: Article) {
    throw new Error('Method not implemented.');
  }

  public update(data: Article) {
    throw new Error('Method not implemented.');
  }

  public remove(data: Article) {
    throw new Error('Method not implemented.');
  }

}
