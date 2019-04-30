import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsLoginComponent } from './experts-login.component';

describe('ExpertsLoginComponent', () => {
  let component: ExpertsLoginComponent;
  let fixture: ComponentFixture<ExpertsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
