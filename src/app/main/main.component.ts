import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { WindowService } from '../core/services/window.service';
import { SuiSidebar } from 'ng2-semantic-ui/dist';
import { MainService } from './main.service';
import { ArticleDataService } from '../core/services/data/article-data.service';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html'
})

export class MainComponent implements AfterViewInit {

  @ViewChild('sidebar') private sidebar: SuiSidebar;

  constructor(public windowService: WindowService,
              public dataService: ArticleDataService,
              public mainService: MainService) {
  }

  public ngAfterViewInit(): void {
    this.mainService.sidebar = this.sidebar;
  }
}
