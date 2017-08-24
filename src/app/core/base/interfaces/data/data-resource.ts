import { DataOption } from '../../params/data-option';
import { Filter } from '../../../models/filter';
import { IDataFilter } from './data-filter';
import { IDataPager } from './data-pager';

export interface IDataResource<T> {
  refresh(): void;
  getFilter(): Filter;
  setFilter(filter: Filter): void;
  setDataOption(option: DataOption): void;
  getDataOption(): DataOption;
  getList(): T[];
  processResource(): T[];
  getUnProcessList(): T[];
  add(item: T): number;
  update(item: T): boolean;
  remove(item: T): boolean;
  getPagerService(): IDataPager<T>;
  registerFilterService(service: IDataFilter<T>): void;
  registerPagerService(service: IDataPager<T>): void;
}
