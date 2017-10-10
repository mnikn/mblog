import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ArticleDataService } from '../../core/services/data/article-data.service';
import { HotkeyService } from '../../core/base/services/hotkey.service';
import { Context } from '../../core/context';
import { NoteListComponent } from './list/note-list.component';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'note-info',
  templateUrl: './note-info.component.html'
})

export class NoteInfoComponent implements OnInit, OnDestroy {

  @ViewChild(NoteListComponent) public noteListComponent: NoteListComponent;

  constructor(public dataService: ArticleDataService,
              private hotkeyService: HotkeyService,
              public mainService: MainService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.initHotkey();
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
  }

  private initHotkey(): void {
    this.hotkeyService.bindKey(Context.hotkey.up, () => {
      if (this.dataService.getSelected()) {
        let articles = this.noteListComponent.articles;
        let index = articles.indexOf(this.dataService.getSelected());
        if (index > 0) {
          let element = this.noteListComponent.itemElements.filter((item, i) => {
            return i === index - 1;
          })[0].nativeElement;
          this.noteListComponent.onSelect(articles[index - 1], element);
        }
      }
    }).bindKey(Context.hotkey.down, () => {
      if (this.dataService.getSelected()) {
        let articles = this.noteListComponent.articles;
        let index = articles.indexOf(this.dataService.getSelected());
        if (index < articles.length - 1) {
          let element = this.noteListComponent.itemElements.filter((item, i) => {
            return i === index + 1;
          })[0].nativeElement;
          this.noteListComponent.onSelect(articles[index + 1], element);
        }
      }
    }).bindKey(Context.hotkey.edit, () => {
      this.router.navigate(['/edit', this.dataService.getSelected().id]);
    }).bindKey(Context.hotkey.menu, () => {
      this.mainService.sidebar.toggle();
    });
  };
}
