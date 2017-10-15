import { Component } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';
import { isUndefined } from "util";

interface IConfirmModalContext {
  content: string;
  title?: string;
  config?: any;
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
  constructor(content: string, title?: string, config?: any) {
    console.log(config);
    if (!config.usePosBtn) {
      config.usePosBtn = true;
    }
    if (isUndefined(config.useNegBtn)) {
      config.useNegBtn = true;
    }
    super(ConfirmModalComponent, {content, title, config});

    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = ModalSize.Small;
  }
}
