import { Component, Inject, ViewChild } from '@angular/core';
import { Article } from '../../core/models/article';
import { DataService } from '../../core/base/interfaces/data-service';
import { ArticleFilter } from 'app/core/models/article-filter';
import { FILTER_METHOD } from '../../core/base/params/filter-method';
import { Context } from '../../core/services/context';
import { IPopup, ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
declare let electron: any;

interface IModalContext {
  question: string;
}

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {

  public isDeploying: boolean = false;

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IModalContext, string, string>;

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

    const config = new TemplateModalConfig<IModalContext, string, string>(this.modalTemplate);
    config.context = {question: '确定要删除笔记吗？'};
    this.modalService
      .open(config)
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

    electron.remote.require('child_process')
      .exec('cd ' + dir + ' && hexo g && hexo d', (error, stdout, stderr) => {
        this.isDeploying = false;
        console.log('error: ' + error);
        console.log(stdout + ' Finish!');
        console.log('stderr: ' + stderr);
      });
  }

  public onSearchEnter(value) {
    this.dataService
      .getFilterService()
      .setFilter(new ArticleFilter(FILTER_METHOD.FILTER_BLUR, value));
  }
}
