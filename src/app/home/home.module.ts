import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppTemplateModule } from '../shared/app-template.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.moudle';

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
