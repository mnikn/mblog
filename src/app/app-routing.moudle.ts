import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {NoteListComponent} from '../note/list/note-list.component';
import {NgModule} from '@angular/core';
import {TrashComponent} from '../trash/trash.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'note-list', component: NoteListComponent},
  {path: 'trash', component: TrashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
