import {
  Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../../core/models/article';
import { Filter } from 'app/core/models/filter';
import { WindowService } from '../../../core/base/services/window.service';
import { ArticleDataService } from '../../../core/services/data/article-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotkeyService } from '../../../core/base/services/hotkey.service';
import { Context } from '../../../core/context';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent implements OnInit {

  public selectStatus: ARTICLE_STATUS;
  public articles: Article[];
  @ViewChild('list') public listElement: ElementRef;
  @ViewChildren('item') public itemElements: QueryList<ElementRef>;

  private scrollDistance: number = 250;

  constructor(public dataService: ArticleDataService,
              public windowService: WindowService,
              private route: ActivatedRoute) {
    this.dataService.onDataModify = () => {
      this.getArticles();
    };
    this.dataService.onProcessMethodChange = () => {
      this.getArticles();
    };
  }

  public ngOnInit(): void {
    this.route.paramMap.forEach((params) => {
      this.selectStatus = Number(params.get('status'));
      this.getArticles();
    });
  }

  public onSelect(article: Article, element): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(null) :
      this.dataService.setSelected(article);
    this.scrollTo(this.listElement.nativeElement,
      element.offsetTop - this.scrollDistance);
  }

  public isSelect(article: Article) {
    return this.dataService.getSelected() &&
      this.dataService.getSelected().id === article.id;
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new Filter('tag', tag.name));
  };

  private getArticles(): void {
    this.dataService.getArticles((articles: Article[]) => {
      this.articles = articles;
    }, this.selectStatus);
  }

  private scrollTo(element, pos) {
    let duration = 100;
    setTimeout(() => {
      element.scrollTop = pos;
    }, duration);
  }
}
