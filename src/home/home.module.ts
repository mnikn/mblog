import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {AppTemplateModule} from '../common/app-template.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    AppTemplateModule,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
