import { Component, Inject, ViewChild } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/base/interfaces/data-service';
import { ArticleFilter } from 'app/core/models/article-filter';
import { FILTER_METHOD } from '../../core/base/params/filter-method';
import { Context } from '../../core/services/context';
import { IPopup, ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
import { ConfirmModal } from "../confirmModal/cofirm-modal";
import { until } from "selenium-webdriver";
import { setTimeout } from "timers";
declare let electron: any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {

  public isDeploying: boolean = false;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              public modalService: SuiModalService) {
  }

  public onAdd() {
    let article = new Article();
    this.dataService.add(article);
  }

  public onDelete(popup: IPopup) {
    if (!this.dataService.getSelected()) {
      popup.open();
      setTimeout(() => {
        popup.close();
      }, 1000);
      return;
    }

    this.modalService
      .open(new ConfirmModal('确定要删除笔记吗？'))
      .onApprove(() => {
        this.dataService.remove(this.dataService.getSelected());
        this.dataService.setSelected(null);
      });
  }

  public onRefresh() {
    this.dataService.refresh();
  }

  public onDeploy() {
    this.isDeploying = true;
    let dir = Context.config.blogRoot.replace(' ', '\\ ');
    let command = 'cd ' + dir + ' && hexo g && hexo d';
    electron.remote.require('child_process').exec(command, (error, stdout, stderr) => {
      console.log(error);
      console.log(stdout);
      console.log(stderr);
    });

    // remove later
    setTimeout(() => {
      this.isDeploying = false;
    }, 10000);
  }

  public onSearchEnter(value) {
    this.dataService
      .getFilterService()
      .setFilter(new ArticleFilter(FILTER_METHOD.FILTER_BLUR, value));
  }
}
