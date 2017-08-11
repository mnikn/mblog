import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit-routing.module';
import { EditorToolbarComponent } from './editorToolbar/editor-toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditComponent,
    EditorComponent,
    EditorToolbarComponent
  ],
  imports: [
    EditRoutingModule,
    SharedModule
  ],
  exports: [
    EditComponent,
    EditorComponent,
    EditorToolbarComponent
  ]
})

export class EditModule {

}
