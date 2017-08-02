import { DataFilterService } from './data-filter-service';
import { DataPagerService } from './data-pager-service';
import { DataOption } from '../params/data-option';

export interface DataService<T> {
  refresh();
  getSelected(): T;
  setSelected(data: T);
  getFilterService(): DataFilterService<T>;
  setFilterService(service: DataFilterService<T>);
  getPagerService(): DataPagerService<T>;
  setPagerService(service: DataPagerService<T>);
  setDataOption(option: DataOption);
  getList(): T[];
  setList(list: T[]);
  getOriginList(): T[];
  add(item: T);
  update(item: T);
  remove(item: T);
}

