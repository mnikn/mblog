import { IDataPager } from '../../interfaces/data/data-pager';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class DataPagerService<T> implements IDataPager<T> {

  public currentPage: number = 1;
  private pageSize: number = 10;
  private lastPage: number;
  private list: T[] = [];
  private pageListCache: T[][] = [];

  constructor() {
    this.reset();
  }

  public setList(list: T[]): void {
    this.list = list;
    this.reset();
  }

  public getLastPage(): number {
    return this.lastPage;
  }

  public currentPageList(): T[] {
    if (this.pageListCache[this.currentPage]) {
      return this.pageListCache[this.currentPage];
    }
    let list;
    if (this.currentPage <= 1) {
      list = _.take(this.list, this.pageSize);
    } else if (this.currentPage >= this.lastPage) {
      list = _.slice(this.list, this.pageItemCount(this.lastPage),
        this.pageItemCount(this.lastPage) + this.pageSize);
    } else {
      list = _.slice(this.list,
        this.pageItemCount(this.currentPage),
        this.pageItemCount(this.currentPage) + this.pageSize);
    }
    this.pageListCache[this.currentPage] = list;
    return this.pageListCache[this.currentPage];
  }

  public setPageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.reset();
  }

  public getPageSize(): number {
    return this.pageSize;
  }

  private pageItemCount(page: number): number {
    return (page - 1) * this.pageSize;
  }

  private reset() {
    this.currentPage = 1;
    this.lastPage = this.list.length / this.pageSize;
    if (this.list.length % this.pageSize > 0) {
      ++this.lastPage;
      this.lastPage = Math.floor(this.lastPage);
    }
    this.pageListCache = [];
  }
}
