import { Component } from '@angular/core';
import { EditService } from './edit.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})

export class EditComponent {

  constructor(public service: EditService) {
  }
}
