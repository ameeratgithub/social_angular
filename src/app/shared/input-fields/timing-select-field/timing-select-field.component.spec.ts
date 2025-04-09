import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingSelectFieldComponent } from './timing-select-field.component';

describe('TimingSelectFieldComponent', () => {
  let component: TimingSelectFieldComponent;
  let fixture: ComponentFixture<TimingSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
