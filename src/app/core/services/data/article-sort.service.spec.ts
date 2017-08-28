import { ArticleSortService } from './article-sort.service';
import { Article } from 'app/core/models/article';

describe('ArticleSortService without the TestBed', () => {
  let articleA = new Article();
  articleA.insertDate = new Date(2014, 12, 1);
  let articleB = new Article();
  articleB.insertDate = new Date(2015, 2, 1, 1, 9);
  let articleC = new Article();
  articleC.insertDate = new Date(2015, 2, 1, 1, 10);
  let articleD = new Article();
  articleD.insertDate = new Date(2015, 3, 1, 1, 10);
  let articleE = new Article();
  articleE.insertDate = new Date(2015, 3, 1, 1, 10);
  let articleF = new Article();
  let mockArticles = [articleA, articleB, articleC, articleD, articleE, articleF];
  let sortArticles = mockArticles.reverse();

  let service: ArticleSortService;
  beforeEach(() => {
    service = new ArticleSortService();
  });

  it('#sortData should return sortArticles', () => {
    expect(service.sortData(mockArticles)).toEqual(sortArticles);
  });

});
