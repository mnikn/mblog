import { Component, OnInit } from '@angular/core';
import { Article, ARTICLE_STATUS } from '../../../core/models/article';
import { Filter } from 'app/core/models/filter';
import { WindowService } from '../../../core/services/window.service';
import { ArticleDataService } from '../../../article-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html'
})

export class NoteListComponent implements OnInit {

  public selectStatus: ARTICLE_STATUS;

  constructor(public dataService: ArticleDataService,
              public windowService: WindowService,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.paramMap.forEach((params) => {
      this.selectStatus = Number(params.get('status'));
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
