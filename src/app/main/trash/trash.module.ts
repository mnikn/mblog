import { TrashComponent } from './trash.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    TrashComponent
  ]
})

export class TrashModule {

}
