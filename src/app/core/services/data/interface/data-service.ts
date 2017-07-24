export interface  DataService<T> {
  getSelected(): T;
  setSelected(data: T);
  getList(): T[];
  add(data: T);
  update(data: T);
  remove(data: T);
}
