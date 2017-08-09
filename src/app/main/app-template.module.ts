import { NgModule } from '@angular/core';
import { AppTemplateComponent } from './app-template.component';
import { AppRoutingModule } from '../app-routing.moudle';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppTemplateComponent
  ],
  imports: [
    // SuiSidebarModule,
    SharedModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppTemplateComponent
  ]
})

export class AppTemplateModule {
}
