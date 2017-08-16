import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleFileReader } from './article-file-reader';
import { isUndefined } from "util";
declare let electron: any;

@Injectable()
export class ArticleFileService {
  private fileReader = new ArticleFileReader();

  public getArticles(): Article[] {
    let fs = electron.remote.require('fs');
    if (fs.existsSync('./dist/config.txt')) {
      let dir = electron.remote.require('fs').readFileSync('./dist/config.txt');
      return this.getArticlesFromDir(dir.toString());
    }
    return [];
  }

  public getArticlesFromDir(dir: string): Article[] {
    let fs = electron.remote.require('fs');
    let articles: Article[] = [];
    let self = this;
    let files = fs.readdirSync(dir);
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

  public saveArticle(article: Article): void {
    let fs = electron.remote.require('fs');
    let dir = electron.remote.require('fs').readFileSync('./dist/config.txt');
    if (!isUndefined(article.fileName)) {
      fs.unlinkSync(article.fileName);
    }
    let fileName = dir + '/' + article.title + '.md';
    fs.writeFileSync(fileName, article.toString(), 'utf8');
  }
}
