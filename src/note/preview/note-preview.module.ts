import {NgModule} from '@angular/core';
import {NotePreviewComponent} from './note-preview.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NotePreviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotePreviewComponent
  ]
})

export class NotePreviewModule {
}
