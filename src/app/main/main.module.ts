import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { NoteInfoModule } from './note/note-info.module';
import { HomeComponent } from './home/home.component';
import { NoteInfoComponent } from './note/note-info.component';
import { MainRoutingModule } from './main-routing.module';
import { MainSharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeModule,
    NoteInfoModule,
    MainSharedModule,
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
    HomeComponent,
    NoteInfoComponent
  ]
})

export class MainModule {
}
