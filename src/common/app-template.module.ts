import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SuiSidebarModule} from 'ng2-semantic-ui';
import {InfoHeaderComponent} from './infoHeader/infoHeader.component';
import {AppTemplateComponent} from './app-template.component';
import {AppRoutingModule} from '../app/app-routing.moudle';

@NgModule({
  declarations: [
    SidebarComponent,
    InfoHeaderComponent,
    AppTemplateComponent
  ],
  imports: [
    SuiSidebarModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    InfoHeaderComponent,
    AppTemplateComponent
  ]
})

export class AppTemplateModule {
}