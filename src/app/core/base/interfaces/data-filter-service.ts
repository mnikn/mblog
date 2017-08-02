export interface DataFilterService<T> {
  getFilter(): any;
  setFilter(filter);
  setList(list: T[]);
  getList(): T[];
  getFilteredList(): T[];
}
