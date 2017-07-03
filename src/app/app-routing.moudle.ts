import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {NoteComponent} from '../note/note.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'note', component: NoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
