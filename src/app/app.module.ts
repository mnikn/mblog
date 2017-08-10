import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.moudle';
import { EditorModule } from './editor/editor.module';

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
    AppRoutingModule,
    MainModule,
    EditorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
