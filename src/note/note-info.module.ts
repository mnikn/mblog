import {NgModule} from '@angular/core';
import {NoteListModule} from './list/note-list.module';
import {NoteListComponent} from './list/note-list.component';
import {NotePreviewModule} from './preview/note-preview.module';
import {NotePreviewComponent} from './preview/note-preview.component';
import {NoteInfoComponent} from './note-info.component';

@NgModule({
  declarations: [
    NoteInfoComponent
  ],
  imports: [
    NoteListModule,
    NotePreviewModule
  ],
  exports: [
    NoteInfoComponent,
    NoteListComponent,
    NotePreviewComponent
  ]
})

export class NoteInfoModule {

}
