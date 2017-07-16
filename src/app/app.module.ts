import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from '../home/home.module';
import { AppTemplateModule } from '../common/app-template.module';
import { TrashModule } from '../trash/trash.module';
import { NoteInfoModule } from '../note/note-info.module';
import { MockArticleDataService } from '../core/services/mock-article-data.service';

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
    NoteInfoModule,
    TrashModule
  ],
  providers: [
    {provide: 'ArticleDataService', useClass: MockArticleDataService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
