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
import { ArticleDataService } from './article-data.service';

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
    MainModule,
    EditModule,
    HotkeyModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {provide: ArticleDataService, useFactory: articleDataServiceFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
