import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SuiSidebarModule} from 'ng2-semantic-ui';
import {InfoHeaderComponent} from './infoHeader/infoHeader.component';

@NgModule({
  declarations: [
    SidebarComponent,
    InfoHeaderComponent,
  ],
  imports: [
    SuiSidebarModule
  ],
  exports: [
    SidebarComponent,
    InfoHeaderComponent
  ]
})

export class SharedModule {
}
