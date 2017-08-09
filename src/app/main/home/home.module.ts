import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SuiPaginationModule } from 'ng2-semantic-ui';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
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
