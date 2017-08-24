import { IDataResource } from '../interfaces/data/data-resource';
import { DataOption } from '../params/data-option';
import { IDataPager } from '../interfaces/data/data-pager';
import { IDataFilter } from '../interfaces/data/data-filter';
import { Injectable } from '@angular/core';
import { Filter } from '../../models/filter';

@Injectable()
export abstract class DataResourceService<T> implements IDataResource<T> {

  protected list: T[];
  protected option: DataOption = new DataOption();
  protected pagerService: IDataPager<T>;
  protected filterService: IDataFilter<T>;

  constructor() {
    this.list = this.processResource();
  }

  public setDataOption(option: DataOption): void {
    this.option = option;
  }

  public getDataOption(): DataOption {
    return this.option;
  }

  public getList(): T[] {
    let processList = this.list;
    if (this.option.useFilter && this.filterService) {
      processList = this.filterService.filterData(processList);
    }
    if (this.option.usePager && this.pagerService) {
      this.pagerService.setList(processList);
      processList = this.pagerService.currentPageList();
    }
    return processList;
  }

  public getUnProcessList(): T[] {
    return this.list;
  }

  public getFilter(): Filter {
    return this.filterService.getFilter();
  }

  public setFilter(filter: Filter): void {
    this.filterService.setFilter(filter);
  }

  public registerFilterService(service: IDataFilter<T>): void {
    this.filterService = service;
  }

  public registerPagerService(service: IDataPager<T>): void {
    this.pagerService = service;
    this.pagerService.setList(this.list);
  }

  public getPagerService(): IDataPager<T> {
    return this.pagerService;
  }

  public abstract refresh(): void;

  public abstract processResource(): T[];

  public abstract add(item: T): number;

  public abstract update(item: T): boolean;

  public abstract remove(item: T): boolean;

}
