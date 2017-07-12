import {Component, Inject} from '@angular/core';
import {IArticleDataService} from "../base/services/IArticleDataService";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(@Inject('IArticleDataService') public dataService: IArticleDataService) {
  }
}
