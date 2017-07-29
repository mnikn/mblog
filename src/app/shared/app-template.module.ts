import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppTemplateComponent } from './app-template.component';
import { AppRoutingModule } from '../app-routing.moudle';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    AppTemplateComponent
  ],
  imports: [
    SuiSidebarModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent,
    AppTemplateComponent
  ]
})

export class AppTemplateModule {
}
