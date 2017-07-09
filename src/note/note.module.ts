import {NgModule} from '@angular/core';
import {NoteListModule} from './list/note-list.module';
import {NoteListComponent} from './list/note-list.component';
import {NotePreviewModule} from './preview/note-preview.module';
import {NotePreviewComponent} from './preview/note-preview.component';

@NgModule({
  imports: [
    NoteListModule,
    NotePreviewModule
  ],
  exports: [
    NoteListComponent,
    NotePreviewComponent
  ]
})

export class NoteModule {

}
