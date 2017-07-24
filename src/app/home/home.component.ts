import { Component, Inject } from '@angular/core';
import { DataService } from '../core/services/data/interface/data-service';
import { Article } from '../core/models/article';
import { Router } from '@angular/router';

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
    this.router.navigate(['/note-info']);
  }
}
