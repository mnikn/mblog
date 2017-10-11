import { IDataPager } from './data-pager';
import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IResourceProcessor } from './resource-processor';
import { IIdentifiable } from '../models/identifiable';
import { IDataSort } from './data-sort';

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

  /**
   * get item
   * @param id
   * @return item
   */
  getItem(id: number): T;

  /**
   * get process list depend on data option
   * @param successCallback
   */
  getList(successCallback?: (items: T[]) => any): void;

  /**
   * get list without process
   * @return list
   */
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

  /**
   * delete item
   * @param item
   * @param successCallback
   */
  deleteItem(item: T, successCallback?: () => any): void;

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
