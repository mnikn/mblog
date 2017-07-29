import { ArticleFilter } from '../../../models/article-filter';
export interface SearchService<T> {
  googleLikeSearch(data: T[], filter: ArticleFilter): T[];
}
