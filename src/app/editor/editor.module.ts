import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorToolbarComponent } from './editorToolbar/editor-toolbar.component';

@NgModule({
  declarations: [
    EditorComponent,
    EditorToolbarComponent
  ],
  imports: [
    EditorRoutingModule
  ],
  exports: [
    EditorComponent,
    EditorToolbarComponent
  ]
})

export class EditorModule {

}
