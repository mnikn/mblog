import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SuiPaginationModule } from 'ng2-semantic-ui';
import { RouterModule } from '@angular/router';
import { MainSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MainSharedModule,
    CommonModule,
    SuiPaginationModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
