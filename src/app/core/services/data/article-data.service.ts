import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileService } from './article-file.service';
import { BaseDataService } from '../../base/base-data-service';
import { ArticlePagerService } from './article-pager.service';
import { ArticleFilterService } from './article-filter.service';

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
    this.pagerService.setList(this.list);
  }

  public add(article) {
    this.list.push(article);
  }

  public update(article) {
    this.fileService.saveArticle(article);
    this.refresh();
  }

  public remove(article) {
    this.list.reduce(article);
  }

}
