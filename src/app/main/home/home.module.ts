import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SuiPaginationModule } from 'ng2-semantic-ui';
import { RouterModule } from '@angular/router';
import { MainSharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MainSharedModule,
    CommonModule,
    SuiPaginationModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
