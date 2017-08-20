import { Component } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';

interface IConfirmModalContext {
  question: string;
  title?: string;
}

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.html'
})
export class ConfirmModalComponent {
  constructor(public modal: SuiModal<IConfirmModalContext, void, void>) {
  }
}

export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext, void, void> {
  constructor(question: string, title?: string) {
    super(ConfirmModalComponent, {question, title});

    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = ModalSize.Small;
  }
}
