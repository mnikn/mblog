import {Component, Inject, OnInit} from '@angular/core';
import {Article} from '../../base/models/article';
import {IArticleDataService} from '../../base/services/IArticleDataService';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent implements OnInit {
  articles: Article[];

  constructor(@Inject('IArticleDataService') private articleService: IArticleDataService) {
  }

  getArticles(): void {
    this.articles = this.articleService.getArticles(null);
  }


  ngOnInit(): void {
    this.getArticles();
  }

  onSelect(article: Article): void {
    this.articleService.setSelectedArticle(article);
  }

}
