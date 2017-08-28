import { Component } from '@angular/core';
import { Filter } from '../../../core/models/filter';
import { ArticleDataService } from '../../../core/services/data/article-data.service';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent {

  constructor(public dataService: ArticleDataService) {
  }

  public onCancelClick() {
    this.dataService.setFilter(new Filter());
  }
}
