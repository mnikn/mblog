import {NgModule} from '@angular/core';
import {NoteListComponent} from './note-list.component';
import {AppTemplateModule} from '../../common/app-template.module';
import {CommonModule} from '@angular/common';
import {ArticleDataService} from '../../base/services/MockArticleDataService';
import {IArticleDataService} from '../../base/services/IArticleDataService';
import {NotePreviewModule} from '../preview/note-preview.module';
import {AppRoutingModule} from '../../app/app-routing.moudle';

@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    AppTemplateModule,
    CommonModule,
    AppRoutingModule,
    NotePreviewModule
  ],
  exports: [
    NoteListComponent
  ]
})

export class NoteListModule {

}
