import { Component } from '@angular/core';
import { Article } from '../../core/models/article';
import { Router } from '@angular/router';
import { Filter } from '../../core/models/filter';
import { ArticleDataService } from '../../article-data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(public dataService: ArticleDataService,
              private router: Router) {
    dataService.getPagerService().setList(dataService.getPostArticles());
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelected(article.id);
    this.dataService.setFilter(new Filter());
    this.router.navigate(['/main-page/note-info']);
  }
}
