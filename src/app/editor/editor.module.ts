import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    EditorRoutingModule
  ],
  exports: [
    EditorComponent
  ]
})

export class EditorModule {

}
