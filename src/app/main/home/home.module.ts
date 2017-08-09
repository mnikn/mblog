import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.moudle';
import { SuiPaginationModule } from 'ng2-semantic-ui';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
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
