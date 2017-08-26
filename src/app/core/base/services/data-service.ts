import { IDataService } from '../interfaces/data/data-service';
import { Inject, Injectable } from '@angular/core';
import { Filter } from '../../models/filter';
import { DataOption } from '../params/data-option';
import { IDataPager } from '../interfaces/data/data-pager';
import { IDataResource } from '../interfaces/data/data-resource';
import { IResourceProcessor } from '../interfaces/data/resource-processor';
import { IIdentifiable } from '../interfaces/models/identifiable';

@Injectable()
export class DataService<T extends IIdentifiable> implements IDataService<T> {
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

  public getItem(id: number): T {
    return this.dataResourceService.getItem(id);
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
    let result = this.dataResourceService.update(item);
    if (this.selectedItem.id === item.id) {
      this.selectedItem = item;
    }
    return result;
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

  public setSelected(id: number) {
    this.selectedItem = this.dataResourceService.getItem(id);
  }

  public registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void {
    this.dataResourceService.registerResourceProcessor(resourceProcessor);
  }

}
