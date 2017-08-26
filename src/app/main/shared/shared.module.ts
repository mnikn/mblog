import { NgModule } from '@angular/core';
import { FilterBarComponent } from 'app/main/shared/filterBar/filter-bar.component';
import { SuiModalModule, SuiPopupModule, SuiSidebarModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from '../../app-routing.moudle';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    FilterBarComponent
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
    FilterBarComponent
  ]
})

export class MainSharedModule {

}
