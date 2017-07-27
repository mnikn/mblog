export interface  DataService<T> {
  getSelected(): T;
  setSelected(data: T);
  getList(searchValue?: string): T[];
  getListByFilter(filter?: (value: T) => boolean): T[];
  add(data: T);
  update(data: T);
  remove(data: T);
}
