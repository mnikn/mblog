import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Article } from '../../models/article';
import { Tag } from '../../models/tag';
import { DataFilterService } from '../../base/services/data/data-filter.service';

@Injectable()
export class ArticleFilterService extends DataFilterService<Article> {

  private filterMap: Map<string, (value) => boolean> = new Map([
    ['tag', (value) => {
      return _.filter(value.tags, (tag: Tag) => tag.name === this.filter.value).length !== 0;
    }],
    ['date', (value) => {
      return value.insertDate === new Date(this.filter.value);
    }],
    ['blur', (value) => {
      let toSearch = value.title.toUpperCase();
      let searchValue = this.filter.value.toUpperCase();
      return toSearch.indexOf(searchValue) !== -1;
    }]
  ]);

  public filterData(list: Article[]): Article[] {
    if (!this.filter.value || this.filter.value.length === 0) {
      return list;
    }
    let articles = [];
    let isLegal = this.filterMap.get(this.filter.method);
    _.forEach(list, (value: Article) => {
      if (isLegal(value) && articles.indexOf(value) === -1) {
        articles.push(value);
      }
    });
    return articles;
  };
}
