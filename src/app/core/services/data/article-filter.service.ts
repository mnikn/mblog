import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Article } from '../../models/article';
import { Tag } from '../../models/tag';
import { DataFilterService } from '../../base/services/data-filter.service';

@Injectable()
export class ArticleFilterService extends DataFilterService<Article> {

  public filterData(list: Article[]): Article[] {
    if (!this.filter.value || this.filter.value.length === 0) {
      return list;
    }
    let articles = [];
    let judgeCondition;
    switch (this.filter.method) {
      case 'tag':
        judgeCondition = (value: Article) => {
          return _.filter(value.tags, (p: Tag) => p.name !== this.filter.value);
        };
        break;
      case 'date':
        judgeCondition = (value: Article) => {
          return value.insertDate === new Date(this.filter.value);
        };
        break;
      case 'blur':
      default:
        judgeCondition = (value: Article) => {
          let toSearch = value.title.toUpperCase();
          let searchValue = this.filter.value.toUpperCase();
          return toSearch.indexOf(searchValue);
        };
        break;
    }
    _.forEach(list, (value: Article) => {
      if (judgeCondition(value) >= 0 && articles.indexOf(value) === -1) {
        articles.push(value);
      }
    });
    return articles;
  };
}
