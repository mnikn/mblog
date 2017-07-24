import { Injectable } from '@angular/core';
import { SearchService } from './SearchService';
import { Article } from '../models/article';
import { List } from 'linqts';

@Injectable()
export class ArticleSearchService implements SearchService<Article> {

  constructor() {
  }

  public googleLikeSearch(data: List<Article>, searchValue): List<Article> {
    return data;
  }
}
