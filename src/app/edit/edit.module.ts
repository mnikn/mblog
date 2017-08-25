import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit-routing.module';
import { EditorToolbarComponent } from './editorToolbar/editor-toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiModalModule, SuiPopupModule } from 'ng2-semantic-ui';
import { HotkeyService } from '../core/services/hotkey.service';
import { EditService } from './edit.service';
import { EditorService } from "./editor/editor.service";

@NgModule({
  declarations: [
    EditComponent,
    EditorComponent,
    EditorToolbarComponent
  ],
  imports: [
    EditRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    SuiModalModule,
    SuiPopupModule
  ],
  exports: [
    EditComponent,
    EditorComponent,
    EditorToolbarComponent
  ],
  providers: [
    EditService,
    {provide: 'IHotkeyService', useClass: HotkeyService}
  ]
})

export class EditModule {

}
