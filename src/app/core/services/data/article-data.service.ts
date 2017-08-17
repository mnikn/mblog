import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileService } from './article-file.service';
import { BaseDataService } from '../../base/base-data-service';
import { ArticlePagerService } from './article-pager.service';
import { ArticleFilterService } from './article-filter.service';
import * as _ from 'lodash';

@Injectable()
export class ArticleDataService extends BaseDataService<Article> {
  private fileService = new ArticleFileService();

  constructor() {
    super();
    this.pagerService = new ArticlePagerService();
    this.filterService = new ArticleFilterService();
    this.refresh();
  }

  public refresh() {
    this.list = this.fileService.getArticles();
    this.list = _.sortBy(this.list, 'insertDate').reverse();
    this.pagerService.setList(this.list);
    console.log(this.list);
  }

  public add(article) {
    this.fileService.createArticle(article);
    this.refresh();
  }

  public update(article) {
    this.fileService.saveArticle(article);
    this.list[article.id] = article;
  }

  public remove(article) {
    this.fileService.removeArticle(article);
    this.refresh();
  }

}
