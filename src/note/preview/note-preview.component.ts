import {Component, Inject, OnInit} from '@angular/core';
import {IArticleDataService} from '../../base/services/IArticleDataService';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../base/models/article';

@Component({
  selector: 'note-preview',
  templateUrl: './note-preview.component.html'
})

export class NotePreviewComponent implements OnInit {

  article: Article

  constructor(@Inject('IArticleDataService') private articleService: IArticleDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
