export interface SearchService<T> {
  googleLikeSearch(data: T[], searchValue): T[];
}
