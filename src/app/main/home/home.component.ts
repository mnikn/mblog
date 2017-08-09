import { Component, Inject } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { Router } from '@angular/router';
import { ArticleFilter } from '../../core/models/article-filter';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              private router: Router) {
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelected(article);
    this.dataService.getFilterService().setFilter(new ArticleFilter());
    this.router.navigate(['/main-page/note-info']);
  }
}
