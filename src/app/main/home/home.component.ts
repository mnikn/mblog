import { Component, Inject } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';
import { Router } from '@angular/router';
import { Filter } from '../../core/models/filter';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(@Inject('DataService') public dataService: IDataService<Article>,
              private router: Router) {
  }

  public gotoNoteInfo(article: Article): void {
    this.dataService.setSelected(article);
    this.dataService.setFilter(new Filter());
    this.router.navigate(['/main-page/note-info']);
  }
}
