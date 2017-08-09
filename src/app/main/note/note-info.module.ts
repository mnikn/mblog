import { NgModule } from '@angular/core';
import { NoteListModule } from './list/note-list.module';
import { NoteInfoComponent } from './note-info.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NoteInfoComponent
  ],
  imports: [
    NoteListModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    NoteInfoComponent
  ],
})

export class NoteInfoModule {

}
