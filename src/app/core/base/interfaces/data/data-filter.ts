import { Filter } from '../../../models/filter';

export interface IDataFilter<T> {
  getFilter(): Filter;
  setFilter(filter: Filter): void;
  filterData(list: T[]): T[];
}
