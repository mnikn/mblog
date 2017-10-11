import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IDataPager } from './data-pager';
import { IResourceProcessor } from './resource-processor';
import { IIdentifiable } from '../models/identifiable';
import { IDataSort } from './data-sort';

export interface IDataResource<T extends IIdentifiable> {
  /**
   * Refresh data
   */
  refresh(): T[];

  getFilter(): Filter;
  setFilter(filter: Filter): void;
  setDataOption(option: DataOption): void;
  getDataOption(): DataOption;
  getItem(id: number): T;
  getList(): T[];
  getUnProcessList(): T[];

  /**
   * Add new item
   * @param item
   * @return new item
   */
  add(item: T): T;
  update(item: T): boolean;
  remove(item: T): boolean;
  getPagerService(): IDataPager<T>;
  getSortService(): IDataSort<T>;
  registerSortService(sortService: IDataSort<T>): void;
  registerResourceProcessor(resourceProcessor: IResourceProcessor<T>): void;
}
