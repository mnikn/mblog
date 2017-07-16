import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppTemplateModule } from '../common/app-template.module';
import { CoreModule } from '../core/core.module';
import { HomeModule } from '../home/home.module';
import { NoteInfoModule } from '../note/note-info.module';
import { TrashModule } from '../trash/trash.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppTemplateModule,
    HomeModule,
    NoteInfoModule,
    TrashModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
