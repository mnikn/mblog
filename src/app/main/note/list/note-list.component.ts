import { Component, OnInit } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../../core/models/article';
import { Filter } from 'app/core/models/filter';
import { WindowService } from '../../../core/services/window.service';
import { ArticleDataService } from '../../../core/services/data/article-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent implements OnInit {

  public selectStatus: ARTICLE_STATUS;
  public articles: Article[];

  constructor(public dataService: ArticleDataService,
              public windowService: WindowService,
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
  }

  public onSelect(article: Article): void {
    // when then item has been clicked,the select will be canceled
    article === this.dataService.getSelected() ?
      this.dataService.setSelected(-1) :
      this.dataService.setSelected(article.id);
  }

  public onTagClick(tag): void {
    this.dataService.setFilter(new Filter('tag', tag.name));
  };
}
