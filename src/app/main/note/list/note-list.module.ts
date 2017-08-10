import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoteListComponent } from './note-list.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    NoteListComponent
  ]
})

export class NoteListModule {

}
