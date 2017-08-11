import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit-routing.module';
import { EditorToolbarComponent } from './editorToolbar/editor-toolbar.component';

@NgModule({
  declarations: [
    EditComponent,
    EditorToolbarComponent
  ],
  imports: [
    EditRoutingModule
  ],
  exports: [
    EditComponent,
    EditorToolbarComponent
  ]
})

export class EditModule {

}
