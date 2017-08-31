import { Component } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../core/models/article';
import { NavigationEnd, Router } from '@angular/router';
import { Filter } from '../../core/models/filter';
import { ArticleDataService } from '../../core/services/data/article-data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  private articles: Article[];

  constructor(public dataService: ArticleDataService,
              private router: Router) {
    this.articles = dataService.getArticles();
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && val.url === '/main-page/home') {
        this.articles = dataService
          .getSortService()
          .sortData(dataService.getUnProcessList()
            .filter((item) => item.status === ARTICLE_STATUS.POST));
        dataService.getPagerService().setList(this.articles);
      }
    });
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelected(article.id);
    this.dataService.setFilter(new Filter('blur', this.dataService.getItem(article.id).title));
    this.router.navigate(['/main-page/note-info', article.status]);
  }
}
