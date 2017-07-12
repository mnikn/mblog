import {NgModule} from "@angular/core";
import {NotePreviewComponent} from "./note-preview.component";

@NgModule({
  declarations: [
    NotePreviewComponent
  ],
  exports: [
    NotePreviewComponent
  ]
})

export class NotePreviewModule {
}
