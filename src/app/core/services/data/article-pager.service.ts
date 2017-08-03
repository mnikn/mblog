import { DataPagerService } from '../../base/interfaces/data-pager-service';
import { Article } from '../../models/article';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ArticlePagerService implements DataPagerService<Article> {
  private pageSize: number = 7;
  private currentPage: number = 1;
  private lastPage: number;
  private list: Article[] = [];
  private pageList: number[] = [];

  constructor() {
    this.reset();
  }

  public setList(list: Article[]): void {
    this.list = list;
    this.reset();
  }

  public getList(): Article[] {
    return this.list;
  }

  public getListSize(): number {
    return this.list.length;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public setCurrentPage(page: number) {
    this.currentPage = page;
  }

  public getLastPage(): number {
    return this.lastPage;
  }

  public switchPreviousPage(): void {
    --this.currentPage;
  }

  public currentPageList(): Article[] {
    if (this.currentPage <= 1) {
      return _.take(this.list, this.pageSize);
    }
    if (this.currentPage >= this.lastPage) {
      return _.slice(this.list, this.pageItemCount(this.lastPage), this.pageSize);
    }
    return _.slice(this.list,
      (this.currentPage - 2) * this.pageSize,
      (this.currentPage - 1) * this.pageSize);
  }

  public switchNextPage(): void {
    ++this.currentPage;
  }

  public switchFirstPage(): void {
    this.currentPage = 1;
  }

  public switchLastPage(): void {
    this.currentPage = this.lastPage;
  }

  public setPageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.reset();
  }

  public getPageSize(): number {
    return this.pageSize;
  }

  public getPageList(): number[] {
    return this.pageList;
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
    this.pageList = [];
    for (let i = 1; i <= this.lastPage; ++i) {
      this.pageList.push(i);
    }
  }
}
