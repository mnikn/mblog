import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { EditService } from './edit.service';
import { NotePreviewComponent } from '../shared/notePreview/note-preview.component';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements AfterViewInit {

  @ViewChild(NotePreviewComponent) private previewComponent: NotePreviewComponent;

  constructor(public service: EditService) {
  }

  public ngAfterViewInit(): void {
    this.service.registerPreviewView(this.previewComponent.preview);
  }

}
