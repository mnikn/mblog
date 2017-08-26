import { Injectable } from '@angular/core';
import { DataResourceService } from '../../base/services/data-resource.service';
import { Article } from '../../models/article';
import { ArticleFileService } from './article-file.service';
import * as _ from 'lodash';

@Injectable()
export class ArticleDataResourceService extends DataResourceService<Article> {
  private fileService;


  public refresh(): void {
    this.list = this.processResource();
    this.pagerService.setList(this.list);
    console.log(this.list);
  }

  public processResource(): Article[] {
    if (!this.fileService) {
      this.fileService = new ArticleFileService();
    }
    let list = this.fileService.getArticles();
    list = _.sortBy(list, 'insertDate').reverse();
    return list;
  }

  public add(item: Article): number {
    this.fileService.createArticle(item);
    this.refresh();
    return this.list.length - 1;
  }

  public update(item: Article): boolean {
    this.fileService.saveArticle(item);
    return true;
  }

  public remove(item: Article): boolean {
    this.fileService.removeArticle(item);
    this.refresh();
    return true;
  }

}
