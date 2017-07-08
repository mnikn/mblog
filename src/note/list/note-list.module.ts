import {NgModule} from '@angular/core';
import {NoteListComponent} from './note-list.component';
import {AppTemplateModule} from '../../common/app-template.module';
import {CommonModule} from '@angular/common';
import {ArticleDataService} from '../../base/services/MockArticleDataService';
import {IArticleDataService} from '../../base/services/IArticleDataService';

@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    AppTemplateModule,
    CommonModule
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
