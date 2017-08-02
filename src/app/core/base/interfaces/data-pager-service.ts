export interface DataPagerService<T> {
  setList(list: T[]): void;
  getList(): T[];
  getListSize(): number;
  getCurrentPage(): number;
  setCurrentPage(page: number);
  getLastPage(): number;
  switchFirstPage(): void;
  currentPageList(): T[];
  switchLastPage(): void;
  switchPreviousPage(): void;
  switchNextPage(): void;
  setPageSize(pageSize: number): void;
  getPageSize(): number;
  getPageList(): number[];
}
