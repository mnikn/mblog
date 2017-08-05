import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppTemplateComponent } from './app-template.component';
import { AppRoutingModule } from '../app-routing.moudle';
import { FilterBarComponent } from './filterBar/filter-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    FilterBarComponent,
    AppTemplateComponent
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
    AppTemplateComponent
  ]
})

export class AppTemplateModule {
}
