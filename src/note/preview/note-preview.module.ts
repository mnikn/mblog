import {NgModule} from '@angular/core';
import {NotePreviewComponent} from './note-preview.component';
import {ArticleDataService} from '../../base/services/MockArticleDataService';

@NgModule({
  declarations: [
    NotePreviewComponent
  ],
  exports: [
    NotePreviewComponent
  ]
  ,
  providers: [
    {provide: 'IArticleDataService', useClass: ArticleDataService}
  ]
})

export class NotePreviewModule {
}
