import { DataService } from './interfaces/data-service';
import { DataFilterService } from './interfaces/data-filter-service';
import { DataPagerService } from './interfaces/data-pager-service';
import { DataOption } from './params/data-option';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseDataService<T> implements DataService<T> {

  protected selectedItem: T;
  protected list: T[];
  protected option: DataOption;
  protected pagerService: DataPagerService<T>;
  protected filterService: DataFilterService<T>;

  constructor() {
    this.option = new DataOption();
  }

  public getSelected(): T {
    return this.selectedItem;
  }

  public setSelected(item: T) {
    this.selectedItem = item;
  }

  public getFilterService(): DataFilterService<T> {
    return this.filterService;
  }

  public setFilterService(service: DataFilterService<T>) {
    this.filterService = service;
  }

  public getPagerService(): DataPagerService<T> {
    return this.pagerService;
  }

  public setPagerService(service: DataPagerService<T>) {
    this.pagerService = service;
  }

  public setDataOption(option: DataOption) {
    this.option = option;
  }

  public getList(): T[] {
    let retList = [];
    if (this.option.useFilter && this.filterService) {
      retList = this.filterService.getFilteredList();
    }
    if (this.option.usePager && this.pagerService) {
      retList = this.pagerService.currentPageList();
    }
    return retList;
  }

  public setList(list: T[]) {
    this.list = list;
  }

  public getOriginList(): T[] {
    return this.list;
  }

  public abstract refresh();

  public abstract add(data: T);

  public abstract update(data: T);

  public abstract remove(data: T);

}
