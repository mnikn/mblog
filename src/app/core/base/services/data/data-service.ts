import { IDataService } from '../../interfaces/data/data-service';
import { Injectable } from '@angular/core';
import { Filter } from '../../../models/filter';
import { DataOption } from '../../params/data-option';
import { IDataPager } from '../../interfaces/data/data-pager';
import { IDataResource } from '../../interfaces/data/data-resource';
import { IResourceProcessor } from '../../interfaces/data/resource-processor';
import { IIdentifiable } from '../../interfaces/models/identifiable';
import { IDataSort } from '../../interfaces/data/data-sort';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

@Injectable()
export class DataService<T extends IIdentifiable> implements IDataService<T> {
  protected selectedItem: T;

  constructor(protected dataResourceService: IDataResource<T>) {
  }

  public refresh(): void {
    Rx.Observable.fromPromise(new Promise((resolve) => {
      resolve(this.dataResourceService.refresh());
      this.onRefreshStart();
    }), Rx.Scheduler.async)
      .subscribe((data: T[]) => {
        this.onRefreshFinish(data);
        this.onDataModify();
      });
  }

  public onRefreshStart(): void {
  }

  public onRefreshFinish(data: T[]): void {
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

  public getList(): Observable<T[]> {
    return Rx.Observable.fromPromise(new Promise<T[]>((resolve) => {
      resolve(this.dataResourceService.getList());
    }), Rx.Scheduler.async);
  }

  public getUnProcessList(): T[] {
    return this.dataResourceService.getUnProcessList();
  }

  public createItem(item: T, successCallback?: () => any): number {
    let successful = this.dataResourceService.add(item);
    if (successful) {
      if (successCallback) {
        successCallback();
      }
      this.onProcessMethodChange();
    }
    return successful;
  }

  public updateItem(item: T, successCallback?: () => any): boolean {
    let successful = this.dataResourceService.update(item);
    if (successful) {
      if (this.selectedItem.id === item.id) {
        this.selectedItem = item;
      }
      if (successCallback) {
        successCallback();
      }
      this.onDataModify();
    }
    return successful;
  }

  public deleteItem(item: T, successCallback?: () => any): boolean {
    let successful = this.dataResourceService.remove(item);
    if (successful) {
      if (successCallback) {
        successCallback();
      }
      this.onDataModify();
    }
    return successful;
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
