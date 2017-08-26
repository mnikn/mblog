import { IDataSort } from '../../base/interfaces/data/data-sort';
import { Article } from '../../models/article';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ArticleSortService implements IDataSort<Article> {
  public sortData(list: Article[]): Article[] {
    return _.sortBy(list, 'insertDate').reverse();
  }
}
