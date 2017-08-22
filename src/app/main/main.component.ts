import { Component, Inject } from '@angular/core';
import { WindowService } from '../core/services/window.service';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html'
})

export class MainComponent {

  constructor(public windowService: WindowService) {

  }
}
