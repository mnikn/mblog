import { Article } from '../models/article';

export interface  ArticleDataService {
  getSelectedArticle(): Article;
  setSelectedArticle(article: Article);
  getArticles(filter);
  addArticle(article);
  updateArticle(article);
  removeArticle(article);
}
