import {Component, Inject} from '@angular/core';
import {IArticleDataService} from "../base/services/IArticleDataService";
import {Article} from "../base/models/article";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(@Inject('IArticleDataService') public dataService: IArticleDataService,
              private router: Router) {
  }

  gotoNoteInfo(article: Article): void {
    this.dataService.setSelectedArticle(article);
    this.router.navigate(['/note-info']);
  }
}
