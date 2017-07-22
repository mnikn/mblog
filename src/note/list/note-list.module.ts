import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app/app-routing.moudle';
import { AppTemplateModule } from '../../shared/app-template.module';
import { NotePreviewModule } from '../preview/note-preview.module';
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
