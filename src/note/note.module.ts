import {NgModule} from '@angular/core';
import {NoteListModule} from './list/note-list.module';
import {NoteListComponent} from './list/note-list.component';
import {NoteDetailModule} from './detail/note-detail.module';
import {NoteDetailComponent} from './detail/note-detail.component';

@NgModule({
  imports: [
    NoteListModule,
    NoteDetailModule
  ],
  exports: [
    NoteListComponent,
    NoteDetailComponent
  ]
})

export class NoteModule {

}
