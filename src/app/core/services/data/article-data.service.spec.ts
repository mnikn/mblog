import { ArticleSortService } from './article-sort.service';
import { Article, ARTICLE_STATUS } from 'app/core/models/article';
import { Tag } from '../../models/tag';
import { ArticleDataService } from './article-data.service';
import { DataPagerService } from 'app/core/base/services/data-pager.service';
import { DataResourceService } from '../../base/services/data-resource.service';
import { ArticleFilterService } from 'app/core/services/data/article-filter.service';
import { IResourceProcessor } from 'app/core/base/interfaces/data/resource-processor';

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
articleD.tags.push(new Tag('Test'));
let articleE = new Article();
articleE.status = ARTICLE_STATUS.DRAFT;
articleE.title = 'Suck';
articleE.tags.push(new Tag('Test'));
let articleF = new Article();
articleF.status = ARTICLE_STATUS.DRAFT;
articleF.title = 'FxxK';
articleF.tags.push(new Tag('Play'));
let mockArticles = [articleA, articleB, articleC, articleD, articleE, articleF];

class MockResourceProcessor implements IResourceProcessor<Article> {
  private articles: Article[];

  constructor() {
    this.articles = mockArticles;
  }

  public processResource(): Article[] {
    return this.articles;
  }

  public createResource(item: Article): boolean {
    this.articles.push(item);
    return true;
  }

  public deleteResource(item: Article): boolean {
    this.articles.splice(this.articles.indexOf(item), 1);
    return true;
  }

  public updateResource(item: Article): boolean {
    this.articles[this.articles.indexOf(item)] = item;
    return true;
  }

}

describe('ArticleDataService without the TestBed', () => {

  let service: ArticleDataService;
  beforeEach(() => {
    let resourceProcessor = new MockResourceProcessor();
    let sortService = new ArticleSortService();
    let pagerService = new DataPagerService<Article>();
    let filterService = new ArticleFilterService();
    let resourceService = new DataResourceService<Article>(
      resourceProcessor,
      sortService,
      pagerService,
      filterService);
    pagerService.setList(resourceService.getList());
    service = new ArticleDataService(resourceService);
  });

  it('#getArticles should return mockArticles', () => {
    expect(service.getUnProcessList()).toEqual(mockArticles);
  });

  it('#getArticles should return resultA', () => {
    let resultA = [articleA, articleB, articleC, articleD];
    expect(service.getArticles().sort()).toEqual(resultA.sort());
  });

  it('#getArticles should return resultB', () => {
    let resultB = [articleE, articleF];
    expect(service.getArticles(ARTICLE_STATUS.DRAFT).sort()).toEqual(resultB.sort());
  });

  it('#getArticles should return resultD', () => {
    let articleG = new Article();
    let resultD = [articleA, articleB, articleC, articleD, articleG];
    service.createItem(articleG);
    expect(service.getArticles().sort()).toEqual(resultD.sort());
  });

});
