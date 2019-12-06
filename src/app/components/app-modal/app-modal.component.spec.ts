import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmodalComponent } from './app-modal.component';

describe('AppmodalComponent', () => {
  let component: AppmodalComponent;
  let fixture: ComponentFixture<AppmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
