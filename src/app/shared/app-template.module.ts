import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { ToolBarComponent } from './toolBar/tool-bar.component';
import { AppTemplateComponent } from './app-template.component';
import { AppRoutingModule } from '../app-routing.moudle';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolBarComponent,
    AppTemplateComponent
  ],
  imports: [
    SuiSidebarModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    ToolBarComponent,
    AppTemplateComponent
  ]
})

export class AppTemplateModule {
}
