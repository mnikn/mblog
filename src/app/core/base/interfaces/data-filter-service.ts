export interface DataFilterService<T> {
  getFilter(): any;
  setFilter(filter);
  getFilteredList(list: T[]): T[];
}
