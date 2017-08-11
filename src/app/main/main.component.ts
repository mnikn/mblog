import { Component, Inject } from '@angular/core';
import { WindowService } from '../core/services/windowService';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html'
})

export class MainComponent {

  constructor(@Inject('WindowService') public windowService: WindowService) {

  }
}
