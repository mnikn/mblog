import {NgModule} from '@angular/core';
import {NoteComponent} from './note.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NoteComponent
  ]
})

export class NoteModule {

}
