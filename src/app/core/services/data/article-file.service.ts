import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileReader } from './article-file-reader';
import { isUndefined } from 'util';
import { Context } from '../context';
declare let electron: any;

@Injectable()
export class ArticleFileService {
  private fileReader = new ArticleFileReader();
  private fs = electron.remote.require('fs');
  private config: any;

  public getArticles(): Article[] {
    this.readConfig();
    if (!isUndefined(this.config)) {
      return this.getArticlesFromDir(this.config.postArticleDir);
    }
    return [];
  }

  public getArticlesFromDir(dir: string): Article[] {
    let articles: Article[] = [];
    let self = this;
    let files = this.fs.readdirSync(dir);
    for (let file of files) {
      if (file.substr(file.lastIndexOf('.')) === '.md') {
        let article = self.fileReader.getArticleFromFile(this.config.postArticleDir + file);
        article.id = articles.length;
        articles.push(article);
      }
    }
    return articles;
  }

  public createArticle(article: Article): void {
    let fileName = this.config.postArticleDir + article.title + '.md';
    article.fileName = fileName;
    this.fs.writeFileSync(fileName, article.toString(), 'utf8');
  }

  public saveArticle(article: Article): void {
    this.removeArticle(article);
    this.createArticle(article);
  }

  public removeArticle(article: Article): void {
    if (article.fileName) {
      this.fs.unlinkSync(article.fileName);
    }
  }

  private readConfig(): void {
    if (this.fs.existsSync('./dist/config.json')) {
      this.config = JSON.parse(this.fs.readFileSync('./dist/config.json'));
      Context.config = this.config;
    }
  }
}
