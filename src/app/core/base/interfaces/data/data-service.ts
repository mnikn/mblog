import { IDataFilter } from './data-filter';
import { IDataPager } from './data-pager';
import { DataOption } from '../../params/data-option';

export interface IDataService<T> {
  refresh();
  getSelected(): T;
  setSelected(data: T);
  getFilterService(): IDataFilter<T>;
  setFilterService(service: IDataFilter<T>);
  getPagerService(): IDataPager<T>;
  setPagerService(service: IDataPager<T>);
  setDataOption(option: DataOption);
  getList(): T[];
  setList(list: T[]);
  getOriginList(): T[];
  add(item: T);
  update(item: T);
  remove(item: T);
}

