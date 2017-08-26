import { Component, Inject } from '@angular/core';
import { IDataService } from '../../../core/base/interfaces/data/data-service';
import { Article } from '../../../core/models/article';
import { Filter } from '../../../core/models/filter';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent {

  constructor(@Inject('DataService') public dataService: IDataService<Article>) {
  }

  public onCancelClick() {
    this.dataService.setFilter(new Filter());
  }
}
