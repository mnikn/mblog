import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeModule} from '../home/home.module';
import {NoteModule} from '../note/note.module';
import {AppTemplateModule} from '../common/app-template.module';
import {TrashModule} from '../trash/trash.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppTemplateModule,
    HomeModule,
    NoteModule,
    TrashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
