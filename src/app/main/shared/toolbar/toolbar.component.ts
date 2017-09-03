import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Filter } from 'app/core/models/filter';
import { ArticleDataService } from '../../../core/services/data/article-data.service';
import { Router } from '@angular/router';
import { MainService } from '../../main.service';
import { HotkeyService } from '../../../core/services/hotkey.service';
declare let electron: any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent implements AfterViewInit, OnDestroy {

  constructor(public dataService: ArticleDataService,
              public mainService: MainService,
              private hotkeyService: HotkeyService,
              private router: Router) {
  }

  public ngAfterViewInit(): void {
    this.hotkeyService.bindKey('command+m', () => {
      this.mainService.sidebar.toggle();
    }).bindKey('command+e', () => {
      this.onEdit();
    });
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
  }

  public onEdit() {
    this.router.navigate(['/edit', this.dataService.getSelected().id]);
  }

  public onSearchEnter(value) {
    this.dataService.setFilter(new Filter('blur', value));
  }
}
