import { Component } from '@angular/core';
import { ARTICLE_STATUS } from '../../../core/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {

  constructor(private router: Router) {
  }

  public gotoPostArticle() {
    this.router.navigate(['/main-page/note-info', ARTICLE_STATUS.POST]);
  }

  public gotoDraftArticle() {
    this.router.navigate(['/main-page/note-info', ARTICLE_STATUS.DRAFT]);
  }

  // public gotoTrashArticle() {
  //   this.router.navigate(['/main-page/note-info', ARTICLE_STATUS.TRASH]);
  // }

}
