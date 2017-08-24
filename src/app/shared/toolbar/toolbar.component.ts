import { Component, Inject } from '@angular/core';
import { Article } from '../../core/models/article';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Filter } from 'app/core/models/filter';
import { Context } from '../../core/services/context';
import { IPopup, SuiModalService } from 'ng2-semantic-ui';
import { ConfirmModal } from '../confirmModal/cofirm-modal';
import { setTimeout } from 'timers';
declare let electron: any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {

  public isDeploying: boolean = false;

  constructor(@Inject('DataService') public dataService: IDataService<Article>,
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
    this.dataService.setFilter(new Filter('blur', value));
  }
}
