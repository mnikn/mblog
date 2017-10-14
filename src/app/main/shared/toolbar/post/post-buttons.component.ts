import { Component } from '@angular/core';
import { Context } from '../../../../core/context';
import { ConfirmModal } from '../../../../shared/confirmModal/cofirm-modal';
import { IPopup, SuiModalService } from 'ng2-semantic-ui';
import { Article, ARTICLE_STATUS } from '../../../../core/models/article';
import { ArticleDataService } from 'app/core/services/data/article-data.service';
import { MainService } from '../../../main.service';
import { PopupUtils } from '../../../../core/base/services/utils/popup-utils';
import { Tag } from '../../../../core/models/tag';
declare let electron: any;

@Component({
  selector: 'post-buttons',
  templateUrl: './post-buttons.component.html'
})
export class PostButtonsComponent {

  public isDeploying: boolean = false;
  public isCreating: boolean = false;
  public isDeleting: boolean = false;
  public isMoving: boolean = false;

  constructor(public dataService: ArticleDataService,
              public modalService: SuiModalService,
              public mainService: MainService) {
  }

  public onAdd(popup: IPopup) {
    let article = new Article();
    article.title = '标题' + this.dataService.getUnProcessList().length;
    article.status = ARTICLE_STATUS.POST;
    let filter = this.dataService.getFilter();
    if (filter && filter.method === 'tag') {
      article.tags.push(new Tag(filter.value));
    }

    this.dataService.createItem(article, () => {
      this.isCreating = true;
    }, () => {
      PopupUtils.openForWhile(popup);
      this.isCreating = false;
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
        this.dataService.deleteItem(this.dataService.getSelected(), () => {
          this.isDeleting = true;
        }, () => {
          this.isDeleting = false;
          this.dataService.setSelected(null);
        });
      });
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
      PopupUtils.openForWhile(popup);
      return;
    }
    let article = this.dataService.getSelected();
    article.status = ARTICLE_STATUS.DRAFT;
    this.dataService.updateItem(article, () => {
      this.isMoving = true;
    }, () => {
      this.isMoving = false;
    });
  }
}
