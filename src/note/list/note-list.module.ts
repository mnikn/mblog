import {NgModule} from '@angular/core';
import {NoteListComponent} from './note-list.component';
import {AppTemplateModule} from '../../common/app-template.module';
import {CommonModule} from '@angular/common';
import {ArticleDataService} from '../../base/services/MockArticleDataService';
import {IArticleDataService} from '../../base/services/IArticleDataService';
import {NoteDetailModule} from '../detail/note-detail.module';
import {AppRoutingModule} from '../../app/app-routing.moudle';

@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    AppTemplateModule,
    CommonModule,
    AppRoutingModule,
    NoteDetailModule
  ],
  exports: [
    NoteListComponent
  ],
  providers: [
    {provide: 'IArticleDataService', useClass: ArticleDataService}
  ]
})

export class NoteListModule {

}
