import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Filter } from 'app/core/models/filter';
import { ArticleDataService } from '../../../core/services/data/article-data.service';
import { Router } from '@angular/router';
import { MainService } from '../../main.service';
import { Context } from '../../../core/context';
import { IPopup } from 'ng2-semantic-ui';
import { PopupUtils } from '../../../core/base/services/utils/popup-utils';
import { SuiPopup } from 'ng2-semantic-ui/dist';
declare let electron: any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent implements AfterViewInit {

  public hasConfiguration: boolean;
  public isRefreshing: boolean = false;
  @ViewChild('refreshPopup') refreshPopup: SuiPopup;

  constructor(public dataService: ArticleDataService,
              public mainService: MainService,
              private router: Router) {
    this.hasConfiguration = typeof (Context.config) !== 'undefined';
  }

  public ngAfterViewInit(): void {
    const remote = electron.ipcRenderer;
    const component = this;

    // when click set blogDir menuItem,it will refresh
    remote.on('refresh', () => {
      component.onRefresh(this.refreshPopup);
    });
  }

  public onRefresh(popup: IPopup) {
    this.dataService.refresh(() => {
      this.isRefreshing = true;
    }, () => {
      this.isRefreshing = false;
      this.hasConfiguration = typeof (Context.config) !== 'undefined';
      PopupUtils.openForWhile(popup);
    });
  }

  public onEdit() {
    this.router.navigate(['/edit', this.dataService.getSelected().id]);
  }

  public onSearchEnter(value) {
    this.dataService.setFilter(new Filter('blur', value));
  }

  public onTagClick(tag: string): void {
    this.dataService.setFilter(new Filter('tag', tag));
  }
}
