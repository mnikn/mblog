import { TrashComponent } from './trash.component';
import { AppTemplateModule } from '../shared/app-template.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    AppTemplateModule
  ],
  exports: [
    TrashComponent
  ]
})

export class TrashModule {

}
