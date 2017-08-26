import { AfterViewInit, Component, forwardRef, Host, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IDataService } from '../../core/base/interfaces/data/data-service';
import { Article } from '../../core/models/article';
import { IPopup, ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
import { Tag } from '../../core/models/tag';
import { SuiPopup } from 'ng2-semantic-ui/dist';
import { Router } from '@angular/router';
import { EditComponent } from '../edit.component';
import { IHotkeyService } from 'app/core/base/interfaces/hotkey-service';
import { EditService } from '../edit.service';
import { DataService } from "../../core/base/services/data-service";

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
              @Inject('DataService') private dataService: DataService<Article>,
              @Inject('IHotkeyService') private hotkeyService: IHotkeyService,
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
    this.router.navigate(['/main-page/note-info']);
  }

  public onSave(popup: IPopup) {
    this.dataService.updateItem(this.editService.article);
    this.dataService.refresh();
    this.dataService.setSelected(this.editService.article);
    popup.open();
    setTimeout(() => {
      popup.close();
    }, 1000);
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
    this.hotkeyService.bindKey('command+s', () => {
      this.onSave(this.popup);
    }).bindKey('command+shift+left', () => {
      this.onBack();
    });
  }
}
