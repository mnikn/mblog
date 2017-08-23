import { IDataService } from './interfaces/data/data-service';
import { IDataFilter } from './interfaces/data/data-filter';
import { IDataPager } from './interfaces/data/data-pager';
import { DataOption } from './params/data-option';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseDataService<T> implements IDataService<T> {

  protected selectedItem: T;
  protected list: T[];
  protected option: DataOption;
  protected pagerService: IDataPager<T>;
  protected filterService: IDataFilter<T>;

  constructor() {
    this.option = new DataOption();
  }

  public getSelected(): T {
    return this.selectedItem;
  }

  public setSelected(item: T) {
    this.selectedItem = item;
  }

  public getFilterService(): IDataFilter<T> {
    return this.filterService;
  }

  public setFilterService(service: IDataFilter<T>) {
    this.filterService = service;
  }

  public getPagerService(): IDataPager<T> {
    return this.pagerService;
  }

  public setPagerService(service: IDataPager<T>) {
    this.pagerService = service;
  }

  public setDataOption(option: DataOption) {
    this.option = option;
  }

  public getList(): T[] {
    let retList = this.list;
    if (this.option.useFilter && this.filterService) {
      retList = this.filterService.getFilteredList(retList);
    }
    if (this.option.usePager && this.pagerService) {
      this.pagerService.setList(retList);
      retList = this.pagerService.currentPageList();
    }
    return retList;
  }

  public setList(list: T[]) {
    this.list = list;
    if (this.pagerService) {
      this.pagerService.setList(list);
    }
  }

  public getOriginList(): T[] {
    return this.list;
  }

  public abstract refresh();

  public abstract add(data: T);

  public abstract update(data: T);

  public abstract remove(data: T);

}
