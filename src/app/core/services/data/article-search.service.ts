import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Article } from '../../models/article';
import { ArticleFilter, FILTER_METHOD } from '../../models/article-filter';
import { Tag } from '../../models/tag';

@Injectable()
export class ArticleSearchService {
  public googleLikeSearch(data: Article[], filter: ArticleFilter): Article[] {
    if (filter.searchValue.length === 0) {
      return data;
    }
    let articles = [];
    let judgeCondition;
    switch (filter.filterMethod) {
      case FILTER_METHOD.FILTER_TAG:
        judgeCondition = (value: Article) => {
          return _.filter(value.tags, (p: Tag) => p.name === filter.searchValue).length !== 0;
        };
        break;
      case FILTER_METHOD.FILTER_DATE:
        judgeCondition = (value: Article) => {
          return value.insertDate === new Date(filter.searchValue);
        };
        break;
      case FILTER_METHOD.FILTER_BLUR:
      default:
        judgeCondition = (value: Article) => {
          return value.title.indexOf(filter.searchValue);
        };
        break;
    }
    _.forEach(data, (value: Article) => {
      if (judgeCondition(value) && articles.indexOf(value) === -1) {
        articles.push(value);
      }
    });
    return articles;
  };
}
