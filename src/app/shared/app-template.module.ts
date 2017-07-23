import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuiSidebarModule } from 'ng2-semantic-ui';
import { AdditionBarComponent } from './additionBar/addition-bar.component';
import { AppTemplateComponent } from './app-template.component';
import { AppRoutingModule } from '../app-routing.moudle';

@NgModule({
  declarations: [
    SidebarComponent,
    AdditionBarComponent,
    AppTemplateComponent
  ],
  imports: [
    SuiSidebarModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    AdditionBarComponent,
    AppTemplateComponent
  ]
})

export class AppTemplateModule {
}
