import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileReader } from './article-file-reader';
declare let electron: any;

@Injectable()
export class ArticleFileService {
  private fileReader = new ArticleFileReader();
  private fs = electron.remote.require('fs');

  public getArticles(): Article[] {
    if (this.fs.existsSync('./dist/config.txt')) {
      let dir = this.fs.readFileSync('./dist/config.txt');
      return this.getArticlesFromDir(dir.toString());
    }
    return [];
  }

  public getArticlesFromDir(dir: string): Article[] {
    let articles: Article[] = [];
    let self = this;
    let files = this.fs.readdirSync(dir);
    for (let file of files) {
      if (file.substr(file.lastIndexOf('.')) === '.md') {
        let article = self.fileReader.getArticleFromFile(dir + '/' + file);
        article.id = articles.length;
        articles.push(article);
      }
    }
    console.log(articles);
    return articles;
  }

  public createArticle(article: Article): void {
    let dir = this.fs.readFileSync('./dist/config.txt');
    let fileName = dir + '/' + article.title + '.md';
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
}
