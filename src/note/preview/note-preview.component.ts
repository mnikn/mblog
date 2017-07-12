import {Component, Inject, Input, OnInit} from '@angular/core';
import {IArticleDataService} from '../../base/services/IArticleDataService';
import {Article} from '../../base/models/article';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent implements OnInit {

  service: IArticleDataService;

  constructor(@Inject('IArticleDataService') private articleService: IArticleDataService) {
  }

  ngOnInit(): void {
    this.service = this.articleService;
  }

}
