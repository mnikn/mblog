import { TestBed, inject } from '@angular/core/testing';

import { ArticleSearchService } from './article-search.service';

describe('ArticleSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleSearchService]
    });
  });

  it('should be created', inject([ArticleSearchService], (service: ArticleSearchService) => {
    expect(service).toBeTruthy();
  }));
});
