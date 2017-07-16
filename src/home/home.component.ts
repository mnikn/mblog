import { Component, Inject } from '@angular/core';
import { ArticleDataService } from '../core/services/article-data-service';
import { Article } from '../core/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(@Inject('ArticleDataService') public dataService: ArticleDataService,
              private router: Router) {
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelectedArticle(article);
    this.router.navigate(['/note-info']);
  }
}
