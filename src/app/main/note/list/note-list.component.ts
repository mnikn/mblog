import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../../core/models/article';
import { Filter } from 'app/core/models/filter';
import { WindowService } from '../../../core/services/window.service';
import { ArticleDataService } from '../../../core/services/data/article-data.service';
import { ActivatedRoute } from '@angular/router';
import { HotkeyService } from '../../../core/services/hotkey.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent implements OnInit, OnDestroy {

  public selectStatus: ARTICLE_STATUS;
  public articles: Article[];

  constructor(public dataService: ArticleDataService,
              public windowService: WindowService,
              private hotkeyService: HotkeyService,
              private route: ActivatedRoute) {
    this.dataService.onDataModify(() => {
      this.articles = this.dataService.getArticles(this.selectStatus);
    });
    this.dataService.onProcessMethodChange(() => {
      this.articles = this.dataService.getArticles(this.selectStatus);
    });
  }

  public ngOnInit(): void {
    this.route.paramMap.forEach((params) => {
      this.selectStatus = Number(params.get('status'));
      this.articles = this.dataService.getArticles(this.selectStatus);
    });

    this.hotkeyService.bindKey('up', () => {
      if (this.dataService.getSelected()) {
        let index = this.articles.indexOf(this.dataService.getSelected());
        if (index > 0) {
          this.dataService.setSelected(this.articles[index - 1]);
        }
      }
    }).bindKey('down', () => {
      if (this.dataService.getSelected()) {
        let index = this.articles.indexOf(this.dataService.getSelected());
        if (index < this.articles.length - 1) {
          this.dataService.setSelected(this.articles[index + 1]);
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(null) :
      this.dataService.setSelected(article);
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new Filter('tag', tag.name));
  };
}
