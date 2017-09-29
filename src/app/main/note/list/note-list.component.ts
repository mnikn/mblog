import {
  Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
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
  @ViewChild('list') private listElement: ElementRef;
  @ViewChildren('item') private itemElements: QueryList<ElementRef>;

  private scrollDistance: number = 250;

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

          let element = this.itemElements.filter((item, i) => {
            return i === index - 1;
          })[0].nativeElement;
          this.onSelect(this.articles[index - 1], element);
        }
      }
    }).bindKey('down', () => {
      if (this.dataService.getSelected()) {
        let index = this.articles.indexOf(this.dataService.getSelected());
        if (index < this.articles.length - 1) {
          let element = this.itemElements.filter((item, i) => {
            return i === index + 1;
          })[0].nativeElement;
          this.onSelect(this.articles[index + 1], element);
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.hotkeyService.clear();
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

  private scrollTo(element, pos) {
    let duration = 100;
    setTimeout(() => {
      element.scrollTop = pos;
    }, duration);
  }
}
