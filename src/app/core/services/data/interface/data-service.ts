import { ArticleFilter } from '../../../models/article-filter';
export interface  DataService<T> {
  getSelected(): T;
  setSelected(data: T);
  getFilter(): ArticleFilter;
  setFilter(filter: ArticleFilter);
  getList(): T[]
  getFilteredList(): T[];
  add(data: T);
  update(data: T);
  remove(data: T);
}
