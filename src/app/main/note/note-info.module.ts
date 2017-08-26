import { NgModule } from '@angular/core';
import { NoteListModule } from './list/note-list.module';
import { NoteInfoComponent } from './note-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainSharedModule } from '../shared/shared.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NoteInfoComponent
  ],
  imports: [
    RouterModule,
    NoteListModule,
    CommonModule,
    MainSharedModule,
    SharedModule
  ],
  exports: [
    NoteInfoComponent
  ],
})

export class NoteInfoModule {

}
