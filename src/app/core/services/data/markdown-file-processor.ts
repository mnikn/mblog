import { Injectable } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../models/article';
import { MarkdownFileReader } from './markdown-file-reader';
import { isUndefined } from 'util';
import { Context } from '../../context';
import { IResourceProcessor } from '../../base/interfaces/data/resource-processor';
declare let electron: any;
import * as Rx from 'rxjs';

@Injectable()
export class MarkdownFileProcessor implements IResourceProcessor<Article> {
  private fileReader = new MarkdownFileReader();
  private fs = electron.remote.require('fs');
  private config: any;
  private nextId: number = 0;

  public processResource(): Article[] {
    this.readConfig();
    let articles = [];
    if (!isUndefined(this.config)) {
      articles = this.getArticlesFromDir(this.config.postArticleDir, ARTICLE_STATUS.POST)
        .concat(this.getArticlesFromDir(this.config.draftArticleDir, ARTICLE_STATUS.DRAFT));
    }
    return articles;
  }

  public createResource(item: Article): Article {
    let dir;
    switch (item.status) {
      case ARTICLE_STATUS.DRAFT:
        dir = this.config.draftArticleDir;
        break;
      default:
        dir = this.config.postArticleDir;
        break;
    }
    let fileName = dir + item.title + '.md';
    item.fileName = fileName;
    this.fs.writeFileSync(fileName, item.toString(), 'utf8');
    return item;
  }

  public deleteResource(item: Article): boolean {
    if (item.fileName) {
      this.fs.unlinkSync(item.fileName);
    }
    return true;
  }

  public updateResource(item: Article): Article {
    this.deleteResource(item);
    let newItem = this.createResource(item);
    return newItem;
  }

  private getArticlesFromDir(dir: string, status: ARTICLE_STATUS): Article[] {
    let articles: Article[] = [];
    let self = this;
    let files = this.fs.readdirSync(dir);
    for (let file of files) {
      if (file.substr(file.lastIndexOf('.')) === '.md') {
        let article = self.fileReader.getArticleFromFile(dir + file);
        article.id = this.nextId++;
        article.status = status;
        articles.push(article);
      }
    }
    return articles;
  }

  private readConfig(): void {
    if (this.fs.existsSync('./dist/config.json')) {
      this.config = JSON.parse(this.fs.readFileSync('./dist/config.json'));
      Context.config = this.config;
    }
  }
}
