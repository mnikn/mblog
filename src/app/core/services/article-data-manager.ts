import { Article } from '../models/article';

export interface  ArticleDataManager {
  getSelectedArticle(): Article;
  setSelectedArticle(article: Article);
  getArticles(filter);
  addArticle(article);
  updateArticle(article);
  removeArticle(article);
}
