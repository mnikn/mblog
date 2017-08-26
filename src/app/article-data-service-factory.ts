import { Article } from './core/models/article';
import { DataService } from './core/base/services/data-service';
import { ArticleDataResourceService } from './core/services/data/article-data-resource.service';
import { DataPagerService } from "./core/base/services/data-pager.service";
import { ArticleFilterService } from "./core/services/data/article-filter.service";

export let articleDataServiceFactory = () => {
  let pagerService = new DataPagerService<Article>();
  let filterService = new ArticleFilterService();
  let resourceService = new ArticleDataResourceService(pagerService, filterService);
  pagerService.setList(resourceService.getList());
  return new DataService<Article>(resourceService);
};
