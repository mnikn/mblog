export interface IDataFilter<T> {
  getFilter(): any;
  setFilter(filter);
  getFilteredList(list: T[]): T[];
}
