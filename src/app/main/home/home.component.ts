import { Component } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../core/models/article';
import { NavigationEnd, Router } from '@angular/router';
import { Filter } from '../../core/models/filter';
import { ArticleDataService } from '../../core/services/data/article-data.service';
import { MainService } from '../main.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  private articles: Article[];

  constructor(public dataService: ArticleDataService,
              public mainService: MainService,
              private router: Router) {
    this.articles = this.processArticles();
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && val.url === '/main-page/home') {
        this.articles = this.processArticles();
        this.dataService.getPagerService().setList(this.articles);
      }
    });
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelected(article.id);
    this.dataService.setFilter(new Filter('blur', this.dataService.getItem(article.id).title));
    this.mainService.selectTab = 2;
    this.router.navigate(['/main-page/note-info', article.status]);
  }

  private processArticles(): Article[] {
    return this.dataService
      .getSortService()
      .sortData(
        this.dataService.getUnProcessList()
          .filter((item) => item.status === ARTICLE_STATUS.POST));
  }
}
