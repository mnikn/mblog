import { Article } from './core/models/article';
import { DataService } from './core/base/services/data-service';
import { ArticleDataResourceService } from './core/services/data/article-data-resource.service';

export let articleDataServiceFactory = () => {
  let resourceService = new ArticleDataResourceService();
  return new DataService<Article>(resourceService);
};
