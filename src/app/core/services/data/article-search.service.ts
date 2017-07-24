import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { SearchService } from './interface/search-service';
import * as _ from 'lodash';

@Injectable()
export class ArticleSearchService implements SearchService<Article> {
  public googleLikeSearch(data: Article[], searchValue: string): Article {
    let article = new Article();
    let maxCount = 0;
    _.forEach(data, (value: Article) => {
      let count = 0;
      _.forEach(value, (prop) => {
        count += this.LCS(prop.toStringTag(), searchValue);
      });
      if (count > maxCount) {
        article = value;
        maxCount = count;
      }
    });
    return article;
  }

  private LCS(str: string, sub: string): number {
    return 1;
  }
}
