import { Filter } from '../../../models/filter';
export interface  DataService<T> {
  getSelected(): T;
  setSelected(data: T);
  getFilter(): Filter;
  setFilter(filter: Filter);
  getList(): T[]
  getFilteredList(): T[];
  add(data: T);
  update(data: T);
  remove(data: T);
}
