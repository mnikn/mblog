import { Component } from '@angular/core';
import { MainService } from '../../../main.service';
import { ArticleDataService } from '../../../../core/services/data/article-data.service';

@Component({
  selector: 'home-buttons',
  templateUrl: './home-buttons.component.html'
})
export class HomeButtonsComponent {

  constructor(public mainService: MainService,
              public dataService: ArticleDataService) {
  }

  public onRefresh() {
    this.dataService.refresh();
  }

}
