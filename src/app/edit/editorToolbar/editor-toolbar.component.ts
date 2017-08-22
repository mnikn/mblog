import { AfterViewInit, Component, forwardRef, Host, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/base/interfaces/data-service';
import { Article } from '../../core/models/article';
import { IPopup, ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
import { Tag } from '../../core/models/tag';
import { SuiPopup } from 'ng2-semantic-ui/dist';
import { Router } from '@angular/router';
import { EditComponent } from '../edit.component';
import { IHotkeyService } from 'app/core/base/interfaces/hotkey-service';
import { EditService } from '../edit.service';

export interface IContext {
  title: string;
  tags: string;
}

@Component({
  selector: 'editor-toolbar',
  templateUrl: './editor-toolbar.component.html'
})

export class EditorToolbarComponent implements AfterViewInit, OnDestroy {

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;
  @ViewChild('popup')
  public popup: SuiPopup;

  private originMdContent: string;
  private originTitle: string;
  private originTags: Tag[];
  private isSaved: boolean;

  constructor(@Inject('DataService<Article>') private dataService: DataService<Article>,
              @Inject('IHotkeyService') private hotkeyService: IHotkeyService,
              private editService: EditService,
              private modalService: SuiModalService,
              private router: Router) {
    this.originMdContent = this.dataService.getSelected().content.mdContent;
    this.originTitle = this.dataService.getSelected().title;
    this.originTags = this.dataService.getSelected().tags;
  }

  public ngAfterViewInit(): void {
    this.setHotKeys();
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
  }

  public onBack() {
    if (!this.isSaved) {
      this.dataService.getSelected().content.mdContent = this.originMdContent;
      this.dataService.getSelected().title = this.originTitle;
      this.dataService.getSelected().tags = this.originTags;
    }
    this.router.navigate(['/main-page/note-info']);
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

  private setHotKeys(): void {
    this.hotkeyService.bindKey('command+s', () => {
      this.onSave(this.popup);
      console.log('dsa');
    }).bindKey('command+shift+left', () => {
      this.onBack();
    });
  }
}
