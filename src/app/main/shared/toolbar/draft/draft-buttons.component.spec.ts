import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftButtonsComponent } from './draft-buttons.component';

describe('DraftButtonsComponent', () => {
  let component: DraftButtonsComponent;
  let fixture: ComponentFixture<DraftButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  // });
});
