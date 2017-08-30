import { Inject, Injectable } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../models/article';
import { DataService } from '../../base/services/data-service';
import { IDataResource } from '../../base/interfaces/data/data-resource';

@Injectable()
export class ArticleDataService extends DataService<Article> {
  private postArticles: Article[];
  private draftArticles: Article[];

  constructor(protected dataResourceService: IDataResource<Article>) {
    super(dataResourceService);
    let updateArticleList = () => {
      this.postArticles = this.getList().filter((item) => item.status === ARTICLE_STATUS.POST);
      this.draftArticles = this.getList().filter((item) => item.status === ARTICLE_STATUS.DRAFT);
    };
    updateArticleList();
    this.onDataModify(updateArticleList);
    this.onProcessMethodChange(updateArticleList);
  }

  public getArticles(status: ARTICLE_STATUS = ARTICLE_STATUS.POST): Article[] {
    switch (status) {
      case ARTICLE_STATUS.DRAFT:
        return this.draftArticles;
      default:
        return this.postArticles;
    }
  }
}
