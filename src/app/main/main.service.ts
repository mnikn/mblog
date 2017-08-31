import { Injectable } from '@angular/core';
import { SuiSidebar } from 'ng2-semantic-ui/dist';

@Injectable()
export class MainService {

  private _sidebar: SuiSidebar;
  private _selectTab: number = 1;

  constructor() {
  }

  get sidebar(): SuiSidebar {
    return this._sidebar;
  }

  set sidebar(value: SuiSidebar) {
    this._sidebar = value;
  }

  get selectTab(): number {
    return this._selectTab;
  }

  set selectTab(value: number) {
    this._selectTab = value;
  }

  public toggleSidebar(): void {
    this._sidebar.toggle();
  }

}
