import { TrashComponent } from './trash.component';
import { NgModule } from '@angular/core';
import { MainSharedModule } from '../shared/shared.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    MainSharedModule,
    SharedModule
  ],
  exports: [
    TrashComponent
  ]
})

export class TrashModule {

}
