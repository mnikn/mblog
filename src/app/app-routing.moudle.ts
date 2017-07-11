import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {NoteListComponent} from '../note/list/note-list.component';
import {NgModule} from '@angular/core';
import {TrashComponent} from '../trash/trash.component';
import {NotePreviewComponent} from '../note/preview/note-preview.component';
import {NoteInfoComponent} from 'note/note-info.component';

// const noteInfoRoutes: Routes = [
//   {path: 'list', component: NoteListComponent},
//   {path: 'preview/:title', component: NotePreviewComponent},
//   {
//     path: '**', redirectTo: 'list'
//   }
// ];

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
