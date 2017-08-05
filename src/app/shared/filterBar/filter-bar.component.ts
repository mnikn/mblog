import { Component, Inject } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent {

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>) {
  }
}
