import { NgModule } from '@angular/core';
import { NoteListModule } from './list/note-list.module';
import { NoteListComponent } from './list/note-list.component';
import { NotePreviewModule } from '../../shared/notePreview/note-preview.module';
import { NotePreviewComponent } from '../../shared/notePreview/note-preview.component';
import { NoteInfoComponent } from './note-info.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NoteInfoComponent
  ],
  imports: [
    NoteListModule,
    NotePreviewModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    NoteInfoComponent,
    NoteListComponent,
    NotePreviewComponent
  ],
})

export class NoteInfoModule {

}
