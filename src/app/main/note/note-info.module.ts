import { NgModule } from '@angular/core';
import { NoteListModule } from './list/note-list.module';
import { NoteInfoComponent } from './note-info.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NoteInfoComponent
  ],
  imports: [
    RouterModule,
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
