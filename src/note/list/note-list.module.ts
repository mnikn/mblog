import {NgModule} from '@angular/core';
import {NoteListComponent} from './note-list.component';
import {AppTemplateModule} from '../../common/app-template.module';

@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    AppTemplateModule
  ],
  exports: [
    NoteListComponent
  ]
})

export class NoteListModule {

}
