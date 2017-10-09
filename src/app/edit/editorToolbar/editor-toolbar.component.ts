import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { IPopup, ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
import { SuiPopup } from 'ng2-semantic-ui/dist';
import { Router } from '@angular/router';
import { EditService } from '../edit.service';
import { ArticleDataService } from '../../core/services/data/article-data.service';
import { HotkeyService } from 'app/core/base/services/hotkey.service';
import { Context } from '../../core/context';
import { PopupUtils } from '../../core/base/services/utils/popup-utils';

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

  constructor(public editService: EditService,
              private dataService: ArticleDataService,
              private hotkeyService: HotkeyService,
              private modalService: SuiModalService,
              private router: Router) {
  }

  public ngAfterViewInit(): void {
    this.setHotKeys();
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
  }

  public onBack() {
    this.router.navigate(['/main-page/note-info', this.editService.article.status]);
  }

  public onSave(popup: IPopup) {
    this.dataService.updateItem(this.editService.article);
    PopupUtils.openForWhile(popup);
  }

  public showNoteInfoModal() {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = 'closed!';
    config.context = {
      title: this.editService.article.title,
      tags: this.editService.article.tagsToString()
    };

    this.modalService
      .open(config)
      .onApprove(() => {
        this.editService.article.title = config.context.title;
        this.editService.article.setStringTags(config.context.tags);
      });
  }

  private setHotKeys(): void {
    this.hotkeyService.bindKey(Context.hotkey.save, () => {
      this.onSave(this.popup);
    }).bindKey(Context.hotkey.back, () => {
      this.onBack();
    });
  }
}
