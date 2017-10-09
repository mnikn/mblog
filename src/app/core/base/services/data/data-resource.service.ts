import { IDataResource } from '../../interfaces/data/data-resource';
import { DataOption } from '../../params/data-option';
import { IDataPager } from '../../interfaces/data/data-pager';
import { IDataFilter } from '../../interfaces/data/data-filter';
import { Injectable } from '@angular/core';
import { Filter } from '../../../models/filter';
import { DataPagerService } from './data-pager.service';
import { DataFilterService } from './data-filter.service';
import { IResourceProcessor } from '../../interfaces/data/resource-processor';
import { IDataSort } from '../../interfaces/data/data-sort';
import { IIdentifiable } from '../../interfaces/models/identifiable';

@Injectable()
export class DataResourceService<T extends IIdentifiable> implements IDataResource<T> {

  protected list: T[];
  protected option: DataOption = new DataOption();
  protected pagerService: IDataPager<T>;
  protected filterService: IDataFilter<T>;
  protected resourceProcessor: IResourceProcessor<T>;
  protected dataSortService: IDataSort<T>;

  private processListCache: T[];

  constructor(resourceProcessor: IResourceProcessor<T>,
              dataSortService?: IDataSort<T>,
              pagerService?: DataPagerService<T>,
              filterService?: DataFilterService<T>) {
    this.dataSortService = dataSortService;
    this.resourceProcessor = resourceProcessor;
    this.pagerService = pagerService;
    this.filterService = filterService;

    this.list = resourceProcessor.processResource();
  }

  public refresh(): T[] {
    this.list = this.resourceProcessor.processResource();
    this.pagerService.setList(this.list);
    this.processListCache = null;
    return this.list;
  }

  public setDataOption(option: DataOption): void {
    this.option = option;
  }

  public getDataOption(): DataOption {
    return this.option;
  }

  public getItem(id: number): T {
    return this.list.find((item) => item.id === id);
  }

  public getList(): T[] {
    if (!this.processListCache) {
      this.processListCache = this.processList();
    }
    return this.processListCache;
  }

  public getUnProcessList(): T[] {
    return this.list;
  }

  public getFilter(): Filter {
    return this.filterService.getFilter();
  }

  public setFilter(filter: Filter): void {
    this.filterService.setFilter(filter);
    this.processListCache = this.processList();
  }

  public getPagerService(): IDataPager<T> {
    return this.pagerService;
  }

  public getSortService(): IDataSort<T> {
    return this.dataSortService;
  }

  public registerSortService(sortService: IDataSort<T>): void {
    this.dataSortService = sortService;
  }

  public add(item: T): number {
    let successful = this.resourceProcessor.createResource(item);
    if (successful) {
      this.refresh();
      return this.list.length - 1;
    }
    return -1;
  }

  public update(item: T): boolean {
    let successful = this.resourceProcessor.updateResource(item);
    if (successful) {
      this.refresh();
    }
    return successful;
  }

  public remove(item: T): boolean {
    let successful = this.resourceProcessor.deleteResource(item);
    if (successful) {
      this.refresh();
    }
    return successful;
  }

  public registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void {
    this.resourceProcessor = resourceProcessor;
    this.refresh();
  }

  private processList(): T[] {
    let processList = this.list;
    if (this.option.useFilter && this.filterService) {
      processList = this.filterService.filterData(processList);
    }
    if (this.option.usePager && this.pagerService) {
      this.pagerService.setList(processList);
      processList = this.pagerService.currentPageList();
    }
    if (this.option.useSort && this.dataSortService) {
      processList = this.dataSortService.sortData(processList);
    }
    return processList;
  }

}
