import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './main/home/home.module';
import { NoteInfoModule } from './main/note/note-info.module';
import { TrashModule } from './main/trash/trash.module';

import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule,
    CoreModule,
    CommonModule,
    MainModule,
    HomeModule,
    NoteInfoModule,
    TrashModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
