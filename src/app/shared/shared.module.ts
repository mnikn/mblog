import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterBarComponent } from 'app/shared/filterBar/filter-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.moudle';
import { NotePreviewComponent } from './notePreview/note-preview.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    FilterBarComponent,
    NotePreviewComponent,
  ],
  imports: [
    SuiSidebarModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent,
    FilterBarComponent,
    NotePreviewComponent
  ]
})

export class SharedModule {

}
