import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { NoteInfoComponent } from './note/note-info.component';
import { TrashComponent } from './trash/trash.component';

const mainRoutes: Routes = [
  {
    path: 'main-page', component: MainComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'note-info', component: NoteInfoComponent},
      {path: 'trash', component: TrashComponent},
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule {

}
