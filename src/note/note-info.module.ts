import {NgModule} from '@angular/core';
import {NoteListModule} from './list/note-list.module';
import {NoteListComponent} from './list/note-list.component';
import {NotePreviewModule} from './preview/note-preview.module';
import {NotePreviewComponent} from './preview/note-preview.component';
import {NoteInfoComponent} from './note-info.component';
import {ArticleDataService} from '../base/services/MockArticleDataService';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NoteInfoComponent
  ],
  imports: [
    NoteListModule,
    NotePreviewModule,
    CommonModule
  ],
  exports: [
    NoteInfoComponent,
    NoteListComponent,
    NotePreviewComponent
  ],
  providers: [
    {provide: 'IArticleDataService', useClass: ArticleDataService}
  ],
})

export class NoteInfoModule {

}
