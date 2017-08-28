import { Article } from '../../models/article';
import { DataPagerService } from '../../base/services/data-pager.service';
import { ArticleFilterService } from './article-filter.service';
import { MarkdownFileProcessor } from './markdown-file-processor';
import { ArticleSortService } from './article-sort.service';
import { DataResourceService } from '../../base/services/data-resource.service';
import { ArticleDataService } from './article-data.service';

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
  return new ArticleDataService(resourceService);
};
