import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { SearchService } from './interface/search-service';
import * as _ from 'lodash';
import { Filter } from '../../models/filter';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

@Injectable()
export class ArticleSearchService implements SearchService<Article> {
  public googleLikeSearch(data: Article[], filter: Filter): Article[] {
    if (filter.searchValue.length === 0) {
      return data;
    }
    let articles = [];
    let judgeCondition = filter.isSpecific ?
      (prop) => {
        return prop.toString() === filter.searchValue;
      } :
      (prop) => {
        return prop.toString().indexOf(filter.searchValue).length !== 0;
      };
    _.forEach(data, (value: Article) => {
      console.log(articles.indexOf(value));
      if (judgeCondition(value.title) && articles.indexOf(value) === -1) {
        articles.push(value);
      }
      _.forEach(value.tags, (tag) => {
        if (judgeCondition(tag.name) && articles.indexOf(value) === -1) {
          articles.push(value);
          return false;
        }
      });
    });
    return articles;
  };
}
