import {NgModule} from '@angular/core';
import {NoteComponent} from './note.component';
import {AppTemplateModule} from '../common/app-template.module';

@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    AppTemplateModule
  ],
  exports: [
    NoteComponent
  ]
})

export class NoteModule {

}
