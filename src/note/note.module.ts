import {NgModule} from '@angular/core';
import {NoteListModule} from './list/note-list.module';
import {NoteListComponent} from './list/note-list.component';

@NgModule({
  imports: [
    NoteListModule
  ],
  exports: [
    NoteListComponent
  ]
})

export class NoteModule {

}
