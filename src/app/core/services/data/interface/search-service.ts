import { Filter } from '../../../models/filter';
export interface SearchService<T> {
  googleLikeSearch(data: T[], filter: Filter): T[];
}
