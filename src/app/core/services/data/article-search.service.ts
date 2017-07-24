import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { SearchService } from './interface/search-service';

@Injectable()
export class ArticleSearchService implements SearchService<Article> {
  public googleLikeSearch(data: Article[], searchValue): Article[] {
    return data;
  }
}
