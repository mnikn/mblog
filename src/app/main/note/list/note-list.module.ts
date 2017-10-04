import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoteListComponent } from './note-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    NoteListComponent
  ]
})

export class NoteListModule {

}
