import { ArticleFilterService } from './article-filter.service';
import { Article } from '../../models/article';
import { Filter } from '../../models/filter';
import { Tag } from '../../models/tag';

describe('ArticleFilterService without the TestBed', () => {
  let articleA = new Article();
  articleA.title = 'Good';
  articleA.tags.push(new Tag('Test'));
  articleA.tags.push(new Tag('Play'));
  let articleB = new Article();
  articleB.title = 'GoodDog';
  articleB.tags.push(new Tag('Fun'));
  let articleC = new Article();
  articleC.tags.push(new Tag('Play'));
  articleC.title = 'Well';
  articleC.tags.push(new Tag('Test'));
  let articleD = new Article();
  articleD.title = 'Fancy';
  let articleE = new Article();
  articleE.title = 'Suck';
  articleE.tags.push(new Tag('Test'));
  let articleF = new Article();
  articleF.title = 'FxxK';
  articleF.tags.push(new Tag('Play'));
  let mockArticles = [articleA, articleB, articleC, articleD, articleE, articleF];

  let service: ArticleFilterService;
  beforeEach(() => {
    service = new ArticleFilterService();
  });

  // test filter blur
  let resultA = mockArticles;
  it('#filterData should equal resultA', () => {
    service.setFilter(new Filter());
    expect(service.filterData(mockArticles)).toEqual(resultA);
  });
  let resultB = [articleB];
  it('#filterData should equal resultB', () => {
    service.setFilter(new Filter('blur', 'GoodDog'));
    expect(service.filterData(mockArticles)).toEqual(resultB);
  });
  let resultC = [articleA, articleB].sort();
  it('#filterData should equal resultC', () => {
    service.setFilter(new Filter('blur', 'Good'));
    expect(service.filterData(mockArticles).sort()).toEqual(resultC);
  });

  // test filter tag
  let resultD = mockArticles;
  it('#filterData should equal resultD', () => {
    service.setFilter(new Filter('tag'));
    expect(service.filterData(mockArticles)).toEqual(resultD);
  });
  let resultE = [articleA, articleC, articleE].sort();
  it('#filterData should equal resultE', () => {
    service.setFilter(new Filter('tag', 'Test'));
    expect(service.filterData(mockArticles).sort()).toEqual(resultE);
  });
  let resultF = [articleA, articleC, articleF].sort();
  it('#filterData should equal resultF', () => {
    service.setFilter(new Filter('tag', 'Play'));
    expect(service.filterData(mockArticles).sort()).toEqual(resultF);
  });


});
