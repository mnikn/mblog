import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {AppTemplateModule} from '../common/app-template.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    AppTemplateModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
