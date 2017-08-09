import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.moudle';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {
}
