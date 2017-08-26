import { Inject, Injectable } from '@angular/core';
import { Article } from './core/models/article';
import { DataService } from './core/base/services/data-service';
import { IDataResource } from './core/base/interfaces/data/data-resource';

@Injectable()
export class ArticleDataService extends DataService<Article> {
  private postArticles: Article[];
  private draftArticles: Article[];
  private trashArticles: Article[];

  constructor(@Inject('IDataResource<T>')
              protected dataResourceService: IDataResource<Article>) {
    super(dataResourceService);
    let updateArticleList = () => {
      this.postArticles = this.getList().filter((item) => item.status === 1);
      this.draftArticles = this.getList().filter((item) => item.status === 0);
      this.trashArticles = this.getList().filter((item) => item.status === -1);
    };
    updateArticleList();
    this.onDataModify(updateArticleList);
    this.onProcessMethodChange(updateArticleList);
  }

  public getPostArticles(): Article[] {
    return this.postArticles;
  }

  public getDraftArticles(): Article[] {
    return this.draftArticles;
  }

  public getTrashArticles(): Article[] {
    return this.trashArticles;
  }
}
