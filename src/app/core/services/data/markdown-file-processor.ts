import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { MarkdownFileReader } from './markdown-file-reader';
import { isUndefined } from 'util';
import { Context } from '../context';
import { IResourceProcessor } from '../../base/interfaces/data/resource-processor';
declare let electron: any;

@Injectable()
export class MarkdownFileProcessor implements IResourceProcessor<Article> {
  private fileReader = new MarkdownFileReader();
  private fs = electron.remote.require('fs');
  private config: any;

  public processResource(): Article[] {
    this.readConfig();
    if (!isUndefined(this.config)) {
      return this.getArticlesFromDir(this.config.postArticleDir);
    }
    return [];
  }

  public createResource(item: Article): boolean {
    let fileName = this.config.postArticleDir + item.title + '.md';
    item.fileName = fileName;
    this.fs.writeFileSync(fileName, item.toString(), 'utf8');
    return true;
  }

  public deleteResource(item: Article): boolean {
    if (item.fileName) {
      this.fs.unlinkSync(item.fileName);
    }
    return true;
  }

  public updateResource(item: Article): boolean {
    this.deleteResource(item);
    this.createResource(item);
    return true;
  }

  private getArticlesFromDir(dir: string): Article[] {
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

  private readConfig(): void {
    if (this.fs.existsSync('./dist/config.json')) {
      this.config = JSON.parse(this.fs.readFileSync('./dist/config.json'));
      Context.config = this.config;
    }
  }
}
