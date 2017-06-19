import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SuiSidebarModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    SuiSidebarModule
  ],
  exports: [
    SidebarComponent
  ]
})

export class SharedModule {
}
