import { Article } from './core/models/article';
import { DataService } from './core/base/services/data-service';
import { DataPagerService } from './core/base/services/data-pager.service';
import { ArticleFilterService } from './core/services/data/article-filter.service';
import { MarkdownFileProcessor } from './core/services/data/markdown-file-processor';
import { ArticleSortService } from './core/services/data/article-sort.service';
import { DataResourceService } from './core/base/services/data-resource.service';

export let articleDataServiceFactory = () => {
  let resourceProcessor = new MarkdownFileProcessor();
  let sortService = new ArticleSortService();
  let pagerService = new DataPagerService<Article>();
  let filterService = new ArticleFilterService();
  let resourceService = new DataResourceService<Article>(
    resourceProcessor,
    sortService,
    pagerService,
    filterService);
  pagerService.setList(resourceService.getList());
  return new DataService<Article>(resourceService);
};
