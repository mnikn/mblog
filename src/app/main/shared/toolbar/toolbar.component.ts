import { Component, OnInit } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../../core/models/article';
import { Filter } from 'app/core/models/filter';
import { Context } from '../../../core/services/context';
import { IPopup, SuiModalService } from 'ng2-semantic-ui';
import { ConfirmModal } from '../../../shared/confirmModal/cofirm-modal';
import { setTimeout } from 'timers';
import { ArticleDataService } from '../../../core/services/data/article-data.service';
import { ActivatedRoute, Router } from '@angular/router';
declare let electron: any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent implements OnInit{

  private selectStatus: ARTICLE_STATUS;

  constructor(public dataService: ArticleDataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.paramMap.forEach((params) => {
      this.selectStatus = Number(params.get('status'));
    });
  }

  public onEdit() {
    this.router.navigate(['/edit', this.dataService.getSelected().id]);
  }

  public onSearchEnter(value) {
    this.dataService.setFilter(new Filter('blur', value));
  }
}
