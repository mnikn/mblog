import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppTemplateModule } from '../shared/app-template.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.moudle';
import { SuiPaginationModule } from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    AppTemplateModule,
    CommonModule,
    SuiPaginationModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
