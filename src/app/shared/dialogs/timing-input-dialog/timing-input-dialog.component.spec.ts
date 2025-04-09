import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingInputDialogComponent } from './timing-input-dialog.component';

describe('TimingInputDialogComponent', () => {
  let component: TimingInputDialogComponent;
  let fixture: ComponentFixture<TimingInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
