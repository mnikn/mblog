import { Injectable } from '@angular/core';
import { SearchService } from './interface/search-service';
import { Article } from '../../models/article';
import { List } from 'linqts';

@Injectable()
export class ArticleSearchService implements SearchService<Article> {
  public googleLikeSearch(data: Article[], searchValue): Article[] {
    return data;
  }
}
