import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterBarComponent } from 'app/shared/filterBar/filter-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SuiModalModule, SuiPopupModule, SuiSidebarModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.moudle';
import { NotePreviewComponent } from './notePreview/note-preview.component';
import { ConfirmModalComponent } from './confirmModal/cofirm-modal';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    FilterBarComponent,
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
    SidebarComponent,
    ToolbarComponent,
    FilterBarComponent,
    NotePreviewComponent,
    ConfirmModalComponent
  ],
  entryComponents: [ConfirmModalComponent]
})

export class SharedModule {

}
