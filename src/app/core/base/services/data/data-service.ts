import { IDataService } from '../../interfaces/data/data-service';
import { Injectable } from '@angular/core';
import { Filter } from '../../../models/filter';
import { DataOption } from '../../params/data-option';
import { IDataPager } from '../../interfaces/data/data-pager';
import { IDataResource } from '../../interfaces/data/data-resource';
import { IResourceProcessor } from '../../interfaces/data/resource-processor';
import { IIdentifiable } from '../../interfaces/models/identifiable';
import { IDataSort } from '../../interfaces/data/data-sort';
import * as Rx from 'rxjs';
import { FuncUtils } from '../utils/func-utils';

@Injectable()
export class DataService<T extends IIdentifiable> implements IDataService<T> {
  protected selectedItem: T;

  constructor(protected dataResourceService: IDataResource<T>) {
  }

  public refresh(startCallback?: () => any, successCallback?: (data: T[]) => any): void {
    Rx.Observable.fromPromise(new Promise((resolve) => {
      resolve(this.dataResourceService.refresh());
      FuncUtils.exec(startCallback);
    }), Rx.Scheduler.async)
      .subscribe((data: T[]) => {
        FuncUtils.exec(successCallback, data);
        this.onDataModify();
      });
  }

  public getFilter(): Filter {
    return this.dataResourceService.getFilter();
  }

  public setFilter(filter: Filter): void {
    this.dataResourceService.setFilter(filter);
    this.onProcessMethodChange();
  }

  public setDataOption(option: DataOption): void {
    this.dataResourceService.setDataOption(option);
    this.onProcessMethodChange();
  }

  public getDataOption(): DataOption {
    return this.dataResourceService.getDataOption();
  }

  public getItem(id: number): T {
    return this.dataResourceService.getItem(id);
  }

  public getList(successCallback?: (items: T[]) => any): void {
    Rx.Observable.fromPromise(new Promise<T[]>((resolve) => {
      resolve(this.dataResourceService.getList());
    }), Rx.Scheduler.async)
      .subscribe((list: T[]) => {
        if (list !== null) {
          successCallback(list);
        }
      });
  }

  public getUnProcessList(): T[] {
    return this.dataResourceService.getUnProcessList();
  }

  public createItem(item: T,
                    startCallback?: (item: T) => any,
                    successCallback?: (item: T) => any): void {
    Rx.Observable.fromPromise(new Promise<T>((resolve) => {
      resolve(this.dataResourceService.add(item));
      FuncUtils.exec(startCallback, item);
    }), Rx.Scheduler.async)
      .subscribe((newItem: T) => {
        if (newItem !== null) {
          FuncUtils.exec(successCallback, newItem);
          this.onDataModify();
        }
      });
  }

  public updateItem(item: T,
                    startCallback?: (item: T) => any,
                    successCallback?: (item: T) => any): void {
    Rx.Observable.fromPromise(new Promise<T>((resolve) => {
      resolve(this.dataResourceService.update(item));
      FuncUtils.exec(startCallback, item);
    }), Rx.Scheduler.async)
      .subscribe((updateItem: T) => {
        if (updateItem !== null) {
          if (this.selectedItem.id === updateItem.id) {
            this.selectedItem = updateItem;
          }
          FuncUtils.exec(successCallback, updateItem);
          this.onDataModify();
        }
      });
  }

  public deleteItem(item: T,
                    startCallback?: (item: T) => any,
                    successCallback?: () => any): void {
    Rx.Observable.fromPromise(new Promise<boolean>((resolve) => {
      resolve(this.dataResourceService.remove(item));
      FuncUtils.exec(startCallback, item);
    }), Rx.Scheduler.async)
      .subscribe((successful: boolean) => {
        if (successful) {
          FuncUtils.exec(successCallback);
        }
        this.onDataModify();
      });
  }

  public getPagerService(): IDataPager<T> {
    return this.dataResourceService.getPagerService();
  }

  public getSortService(): IDataSort<T> {
    return this.dataResourceService.getSortService();
  }

  public registerSortService(sortService: IDataSort<T>): void {
    this.dataResourceService.registerSortService(sortService);
    this.onProcessMethodChange();
  }

  public getSelected(): T {
    return this.selectedItem;
  }

  public setSelected(item: T) {
    this.selectedItem = item;
  }

  public registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void {
    this.dataResourceService.registerResourceProcessor(resourceProcessor);
  }

  public onDataModify(): void {
  }

  public onProcessMethodChange(): void {
  }

}
