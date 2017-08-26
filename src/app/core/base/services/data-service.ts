import { IDataService } from '../interfaces/data/data-service';
import { Inject, Injectable } from '@angular/core';
import { Filter } from '../../models/filter';
import { DataOption } from '../params/data-option';
import { IDataPager } from '../interfaces/data/data-pager';
import { IDataResource } from '../interfaces/data/data-resource';
import { IResourceProcessor } from '../interfaces/data/resource-processor';

@Injectable()
export class DataService<T> implements IDataService<T> {
  protected selectedItem: T;

  constructor(@Inject('IDataResource<T>')
              protected dataResourceService: IDataResource<T>) {
  }

  public refresh(): void {
    this.dataResourceService.refresh();
  }

  public getFilter(): Filter {
    return this.dataResourceService.getFilter();
  }

  public setFilter(filter: Filter): void {
    this.dataResourceService.setFilter(filter);
  }

  public setDataOption(option: DataOption): void {
    this.dataResourceService.setDataOption(option);
  }

  public getDataOption(): DataOption {
    return this.dataResourceService.getDataOption();
  }

  public getList(): T[] {
    return this.dataResourceService.getList();
  }

  public getUnProcessList(): T[] {
    return this.dataResourceService.getUnProcessList();
  }

  public createItem(item: T): number {
    return this.dataResourceService.add(item);
  }

  public updateItem(item: T): boolean {
    return this.dataResourceService.update(item);
  }

  public deleteItem(item: T): boolean {
    return this.dataResourceService.remove(item);
  }

  public getPagerService(): IDataPager<T> {
    return this.dataResourceService.getPagerService();
  }

  public getSelected(): T {
    return this.selectedItem;
  }

  public setSelected(data: T) {
    this.selectedItem = data;
  }

  public registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void {
    this.dataResourceService.registerResourceProcessor(resourceProcessor);
  }

}
