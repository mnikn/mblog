import { TestBed, inject } from '@angular/core/testing';

import { IpcRenderService } from './ipc-render.service';

describe('IpcRenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpcRenderService]
    });
  });

  it('should be created', inject([IpcRenderService], (service: IpcRenderService) => {
    expect(service).toBeTruthy();
  }));
});
