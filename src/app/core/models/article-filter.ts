export class ArticleFilter {
  // 1: filter blur
  // 2: filter by tag
  // 3: filter by date
  public filterMethod: FILTER_METHOD;
  public searchValue: string;

  constructor(filterMethod = FILTER_METHOD.FILTER_BLUR, searchValue = '') {
    this.filterMethod = filterMethod;
    this.searchValue = searchValue;
  }
}

export const enum FILTER_METHOD {FILTER_BLUR, FILTER_TAG, FILTER_DATE}
