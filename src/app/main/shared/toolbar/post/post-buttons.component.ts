import { Component } from '@angular/core';
import { Context } from '../../../../core/context';
import { ConfirmModal } from '../../../../shared/confirmModal/cofirm-modal';
import { IPopup, SuiModalService } from 'ng2-semantic-ui';
import { Article, ARTICLE_STATUS } from '../../../../core/models/article';
import { ArticleDataService } from 'app/core/services/data/article-data.service';
import { MainService } from '../../../main.service';
import { PopupUtils } from "../../../../core/base/services/utils/popup-utils";
declare let electron: any;

@Component({
  selector: 'post-buttons',
  templateUrl: './post-buttons.component.html'
})
export class PostButtonsComponent {

  public isDeploying: boolean = false;

  constructor(public dataService: ArticleDataService,
              public modalService: SuiModalService,
              public mainService: MainService) {
  }

  public onAdd(popup: IPopup) {
    let article = new Article();
    article.title = '标题' + this.dataService.getUnProcessList().length;
    article.status = ARTICLE_STATUS.POST;
    this.dataService.createItem(article, () => {
      PopupUtils.openForWhile(popup);
    });
  }

  public onDelete(popup: IPopup) {
    if (!this.dataService.getSelected()) {
      PopupUtils.openForWhile(popup);
      return;
    }

    this.modalService
      .open(new ConfirmModal('确定要删除笔记吗？'))
      .onApprove(() => {
        this.dataService.deleteItem(this.dataService.getSelected());
        this.dataService.setSelected(null);
      });
  }

  public onRefresh() {
    this.dataService.refresh();
  }

  public onDeploy() {
    this.isDeploying = true;
    let dir = Context.config.blogRoot.replace(' ', '\\ ');
    let command = 'cd ' + dir + ' && ' + Context.command.deploy;
    electron.remote.require('child_process').exec(command, (error, stdout, stderr) => {
      console.log(error);
      console.log(stdout);
      console.log(stderr);
    });

    // deleteItem later
    setTimeout(() => {
      this.isDeploying = false;
    }, 10000);
  }

  public moveToDraft(popup: IPopup): void {
    if (!this.dataService.getSelected()) {
      popup.open();
      setTimeout(() => {
        popup.close();
      }, 1000);
      return;
    }
    let article = this.dataService.getSelected();
    this.dataService.deleteItem(article);
    article.status = ARTICLE_STATUS.DRAFT;
    this.dataService.createItem(article);
    this.dataService.setSelected(null);
  }
}
