import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppTemplateModule } from '../common/app-template.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing.moudle';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    AppTemplateModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
