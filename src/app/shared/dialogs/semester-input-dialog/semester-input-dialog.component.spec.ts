import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterInputDialogComponent } from './semester-input-dialog.component';

describe('SemesterInputDialogComponent', () => {
  let component: SemesterInputDialogComponent;
  let fixture: ComponentFixture<SemesterInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
