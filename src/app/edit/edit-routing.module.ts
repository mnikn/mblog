import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit.component';

const editorRoutes: Routes = [{
  path: 'edit', component: EditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule]
})

export class EditRoutingModule {

}
