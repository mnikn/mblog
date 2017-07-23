import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.moudle';
import { AppTemplateModule } from '../../shared/app-template.module';
import { NotePreviewModule } from '../../shared/notePreview/note-preview.module';
import { NoteListComponent } from './note-list.component';

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
