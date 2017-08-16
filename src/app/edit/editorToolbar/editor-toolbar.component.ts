import { Component, Inject, ViewChild } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';

export interface IContext {
  title: string;
  tags: string;
}

@Component({
  selector: 'editor-toolbar',
  templateUrl: './editor-toolbar.component.html'
})

export class EditorToolbarComponent {

  private originMdContent: string;
  private isSaved: boolean;

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              public modalService: SuiModalService) {
    this.originMdContent = this.dataService.getSelected().content.mdContent;
  }

  public onBack() {
    if (!this.isSaved) {
      this.dataService.getSelected().content.mdContent = this.originMdContent;
    }
  }

  public onSave() {
    this.dataService.update(this.dataService.getSelected());
    this.isSaved = true;
  }

  public showNoteInfoModal() {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = 'closed!';
    config.context = {
      title: this.dataService.getSelected().title,
      tags: this.dataService.getSelected().tagsToString()
    };

    this.modalService
      .open(config)
      .onApprove(() => { /* approve callback */
        this.dataService.getSelected().title = config.context.title;
        this.dataService.getSelected().setStringTags(config.context.tags);
      })
      .onDeny((result) => { /* deny callback */
      });
  }
}
