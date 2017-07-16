import { Component, Inject } from '@angular/core';
import { ArticleDataManager } from '../core/services/article-data-manager';
import { Article } from '../core/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(@Inject('ArticleDataManager') public dataService: ArticleDataManager,
              private router: Router) {
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelectedArticle(article);
    this.router.navigate(['/note-info']);
  }
}
