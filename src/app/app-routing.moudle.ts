import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {NoteListComponent} from '../note/list/note-list.component';
import {NgModule} from '@angular/core';
import {TrashComponent} from '../trash/trash.component';
import {NotePreviewComponent} from '../note/preview/note-preview.component';

const noteRoutes: Routes = [
  {path: 'list', component: NoteListComponent},
  {path: 'preview', component: NotePreviewComponent},
  {
    path: '**', redirectTo: 'list'
  }
];

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'note', children: noteRoutes},
  {path: 'trash', component: TrashComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
