import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { SearchService } from './interface/search-service';
import * as _ from 'lodash';

@Injectable()
export class ArticleSearchService implements SearchService<Article> {
  public googleLikeSearch(data: Article[], searchValue: string): Article[] {
    if (searchValue === undefined) {
      return data;
    }
    let articles = [];
    _.forEach(data, (value: Article) => {
      _.forEach(value, (prop) => {
        if (prop.toString().indexOf(searchValue) !== -1) {
          articles.push(value);
          return false;
        }
      });
    });
    return articles;
  }
}
