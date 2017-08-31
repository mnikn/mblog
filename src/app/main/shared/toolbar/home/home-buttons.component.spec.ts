import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonsComponent } from './home-buttons.component';

describe('HomeButtonsComponent', () => {
  let component: HomeButtonsComponent;
  let fixture: ComponentFixture<HomeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
