import { List } from 'linqts';
export interface SearchService<T> {
  googleLikeSearch(data: List<T>, searchValue): List<T>;
}
