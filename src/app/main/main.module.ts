import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.moudle';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { NoteInfoModule } from './note/note-info.module';
import { TrashModule } from './trash/trash.module';
import { HomeComponent } from './home/home.component';
import { NoteInfoComponent } from './note/note-info.component';
import { TrashComponent } from './trash/trash.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeModule,
    NoteInfoModule,
    TrashModule,
    SharedModule,
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
    HomeComponent,
    NoteInfoComponent,
    TrashComponent
  ]
})

export class MainModule {
}
