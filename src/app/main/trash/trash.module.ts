import { TrashComponent } from './trash.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TrashComponent
  ]
})

export class TrashModule {

}
