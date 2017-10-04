import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { AppRoutingModule } from '../../../app-routing.moudle';
import { SuiPopupModule } from 'ng2-semantic-ui/dist';
import { SuiModalModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { PostButtonsComponent } from './post/post-buttons.component';
import { DraftButtonsComponent } from './draft/draft-buttons.component';
import { HomeButtonsComponent } from './home/home-buttons.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ToolbarComponent,
    PostButtonsComponent,
    DraftButtonsComponent,
    HomeButtonsComponent
  ],
  imports: [
    SuiModalModule,
    SuiPopupModule,
    CommonModule,
    TranslateModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent,
    PostButtonsComponent,
    DraftButtonsComponent,
    HomeButtonsComponent
  ]
})

export class ToolbarModule {

}
