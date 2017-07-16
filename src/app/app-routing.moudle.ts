import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteInfoComponent } from 'note/note-info.component';
import { HomeComponent } from '../home/home.component';
import { TrashComponent } from '../trash/trash.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'note-info', component: NoteInfoComponent},
  {path: 'trash', component: TrashComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
