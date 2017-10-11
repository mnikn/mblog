import { Injectable } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../models/article';
import { DataService } from '../../base/services/data/data-service';
import { IDataResource } from '../../base/interfaces/data/data-resource';
import * as _ from 'lodash';

@Injectable()
export class ArticleDataService extends DataService<Article> {

  constructor(protected dataResourceService: IDataResource<Article>) {
    super(dataResourceService);
  }

  public getArticles(successCallback: (items: Article[]) => any,
                     status: ARTICLE_STATUS = ARTICLE_STATUS.POST): void {
    switch (status) {
      case ARTICLE_STATUS.DRAFT:
        this.getList((list: Article[]) => {
          successCallback(list.filter((item) => item.status === ARTICLE_STATUS.DRAFT));
        });
        break;
      default:
        this.getList((list: Article[]) => {
          successCallback(list.filter((item) => item.status === ARTICLE_STATUS.POST));
        });
    }
  }

  public getAllTags(): string[] {
    let tags = _
      .flatMap(this.getUnProcessList(), (article) => article.tags)
      .map((t) => t.name);
    tags = _.uniq(tags);
    return tags;
  }
}
