import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { WindowService } from '../core/base/services/window.service';
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

  public keepSidebarState(): void {
    this.sidebar.service.wasJustOpened ?
      this.sidebar.service.setVisibleState(true) :
      this.sidebar.service.setVisibleState(false);
  }
}
