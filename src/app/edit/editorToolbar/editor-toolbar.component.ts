import { Component, Inject, OnDestroy, ViewChild } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { IPopup, ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
import { Tag } from '../../core/models/tag';
import { HotkeysService } from 'angular2-hotkeys';
import { SuiPopup } from 'ng2-semantic-ui/dist';


export interface IContext {
  title: string;
  tags: string;
}

@Component({
  selector: 'editor-toolbar',
  templateUrl: './editor-toolbar.component.html'
})

export class EditorToolbarComponent implements OnDestroy {

  private originMdContent: string;
  private originTitle: string;
  private originTags: Tag[];
  private isSaved: boolean;

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;
  @ViewChild('popup')
  public popup: SuiPopup;

  constructor(@Inject('DataService<Article>') public dataService: DataService<Article>,
              public modalService: SuiModalService,
              private hotkeysService: HotkeysService) {
    this.originMdContent = this.dataService.getSelected().content.mdContent;
    this.originTitle = this.dataService.getSelected().title;
    this.originTags = this.dataService.getSelected().tags;

    this.setHotKeys();
  }

  public onBack() {
    if (!this.isSaved) {
      this.dataService.getSelected().content.mdContent = this.originMdContent;
      this.dataService.getSelected().title = this.originTitle;
      this.dataService.getSelected().tags = this.originTags;
    }
  }

  public onSave(popup: IPopup) {
    this.dataService.update(this.dataService.getSelected());
    this.isSaved = true;
    popup.open();
    setTimeout(() => {
      popup.close();
    }, 1000);
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
      });
  }

  public ngOnDestroy(): void {
    this.hotkeysService.mousetrap.reset();
  }

  private setHotKeys(): void {
    this.hotkeysService.mousetrap.bind('command+s', (e) => {
      this.onSave(this.popup);
      return false;
    });
  }
}
