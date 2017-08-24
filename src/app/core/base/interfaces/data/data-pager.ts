export interface IDataPager<T> {
  currentPage: number;
  setList(list: T[]): void;
  getLastPage(): number;
  currentPageList(): T[];
  setPageSize(pageSize: number): void;
  getPageSize(): number;
}
