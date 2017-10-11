import { IDataPager } from './data-pager';
import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IResourceProcessor } from './resource-processor';
import { IIdentifiable } from '../models/identifiable';
import { IDataSort } from './data-sort';
import { Observable } from 'rxjs/Observable';

export interface IDataService<T extends IIdentifiable> {

  getFilter(): Filter;
  setFilter(filter: Filter): void;
  getPagerService(): IDataPager<T>;
  getSortService(): IDataSort<T>;
  registerSortService(sortService: IDataSort<T>): void;

  /**
   * Refresh data
   */
  refresh(): void;

  /**
   * On refresh start
   */
  onRefreshStart(): void;

  /**
   * On refresh finish
   */
  onRefreshFinish(value: T[]): void;

  getItem(id: number): T;
  getList(): Observable<T[]>;
  getUnProcessList(): T[];

  /**
   * create new item
   * @param item
   * @param successCallback
   */
  createItem(item: T, successCallback: (item: T) => any): void;

  /**
   * update item
   * @param item
   * @param successCallback
   */
  updateItem(item: T, successCallback?: (item: T) => any): void;

  deleteItem(item: T, successCallback?: () => any): boolean;
  registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void;
  setDataOption(option: DataOption): void;
  getDataOption(): DataOption;
  getSelected(): T;
  setSelected(item: T);

  /**
   * On data modify,trigger when refresh or modify list
   */
  onDataModify(): void;

  /**
   * trigger when we change the way process originList,eg: change the filter or pager
   */
  onProcessMethodChange(): void;

}
