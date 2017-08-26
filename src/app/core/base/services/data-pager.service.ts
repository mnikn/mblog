import { IDataPager } from '../interfaces/data/data-pager';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class DataPagerService<T> implements IDataPager<T> {

  public currentPage: number = 1;
  private pageSize: number = 10;
  private lastPage: number;
  private list: T[] = [];

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
    console.log(this.currentPage);
    if (this.currentPage <= 1) {
      return _.take(this.list, this.pageSize);
    }
    if (this.currentPage >= this.lastPage) {
      return _.slice(this.list, this.pageItemCount(this.lastPage),
        this.pageItemCount(this.lastPage) + this.pageSize);
    }
    return _.slice(this.list,
      this.pageItemCount(this.currentPage),
      this.pageItemCount(this.currentPage) + this.pageSize);
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
  }
}