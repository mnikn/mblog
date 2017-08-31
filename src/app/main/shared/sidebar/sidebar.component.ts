import { Component } from '@angular/core';
import { ARTICLE_STATUS } from '../../../core/models/article';
import { Router } from '@angular/router';
import { MainService } from '../../main.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {

  constructor(private router: Router,
              public mainService: MainService) {
  }

  public gotoHome(): void {
    this.mainService.selectTab = 1;
    this.router.navigate(['/main-page/home']);
  }

  public gotoPostArticle() {
    this.mainService.selectTab = 2;
    this.router.navigate(['/main-page/note-info', ARTICLE_STATUS.POST]);
  }

  public gotoDraftArticle() {
    this.mainService.selectTab = 3;
    this.router.navigate(['/main-page/note-info', ARTICLE_STATUS.DRAFT]);
  }

}
