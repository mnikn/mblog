import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.moudle';
import { EditModule } from './edit/edit.module';
import { HotkeyModule } from 'angular2-hotkeys';
import { articleDataServiceFactory } from './article-data-service-factory';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    CommonModule,
    AppRoutingModule,
    MainModule,
    EditModule,
    HotkeyModule.forRoot()
  ],
  providers: [
    {provide: 'DataService', useFactory: articleDataServiceFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
