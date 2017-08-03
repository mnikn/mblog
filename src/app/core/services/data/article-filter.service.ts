import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Article } from '../../models/article';
import { ArticleFilter, FILTER_METHOD } from '../../models/article-filter';
import { Tag } from '../../models/tag';
import { DataFilterService } from '../../base/interfaces/data-filter-service';

@Injectable()
export class ArticleFilterService implements DataFilterService<Article> {

  private filter: ArticleFilter = new ArticleFilter();

  public getFilter() {
    return this.filter;
  }

  public setFilter(filter) {
    this.filter = filter;
  }

  public getFilteredList(list: Article[]): Article[] {
    if (!this.filter.searchValue || this.filter.searchValue.length === 0) {
      return list;
    }
    let articles = [];
    let judgeCondition;
    switch (this.filter.filterMethod) {
      case FILTER_METHOD.FILTER_TAG:
        judgeCondition = (value: Article) => {
          return _.filter(value.tags, (p: Tag) => p.name === this.filter.searchValue).length !== 0;
        };
        break;
      case FILTER_METHOD.FILTER_DATE:
        judgeCondition = (value: Article) => {
          return value.insertDate === new Date(this.filter.searchValue);
        };
        break;
      case FILTER_METHOD.FILTER_BLUR:
      default:
        judgeCondition = (value: Article) => {
          let toSearch = value.title.toUpperCase();
          let searchValue = this.filter.searchValue.toUpperCase();
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
