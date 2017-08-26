import { NgModule } from '@angular/core';
import { SuiModalModule, SuiPopupModule, SuiSidebarModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.moudle';
import { NotePreviewComponent } from './notePreview/note-preview.component';
import { ConfirmModalComponent } from './confirmModal/cofirm-modal';

@NgModule({
  declarations: [
    NotePreviewComponent,
    ConfirmModalComponent
  ],
  imports: [
    SuiSidebarModule,
    SuiModalModule,
    SuiPopupModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NotePreviewComponent,
    ConfirmModalComponent
  ],
  entryComponents: [ConfirmModalComponent]
})

export class SharedModule {

}
