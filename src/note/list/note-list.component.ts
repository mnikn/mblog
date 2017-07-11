import {Component, Inject, OnInit} from '@angular/core';
import {Article} from '../../base/models/article';
import {IArticleDataService} from '../../base/services/IArticleDataService';
import {Router} from '@angular/router';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent implements OnInit {
  articles: Article[];

  constructor(@Inject('IArticleDataService') private articleService: IArticleDataService,
              private router: Router) {
  }

  getArticles(): void {
    this.articles = this.articleService.GetArticles(null);
  }


  ngOnInit(): void {
    this.getArticles();
  }

}
