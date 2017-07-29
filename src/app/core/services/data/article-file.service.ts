import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileReader } from './article-file-reader';
declare let electron: any;

@Injectable()
export class ArticleFileService {
  private fileReader = new ArticleFileReader();

  public getArticles(): Article[] {
    let dir = electron.remote.require('fs').readFileSync('./dist/config.txt');
    return this.getArticlesFromDir(dir.toString());
  }

  public getArticlesFromDir(dir: string): Article[] {
    let fs = electron.remote.require('fs');
    let articles: Article[] = [];
    let self = this;
    let files = fs.readdirSync(dir);
    for (let file of files) {
      if (file.substr(file.lastIndexOf('.')) === '.md') {
        articles.push(self.fileReader.getArticleFromFile(dir + '/' + file));
      }
    }
    console.log(articles);
    return articles;
  }
}
