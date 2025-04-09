import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentInputDialogComponent } from './department-input-dialog.component';

describe('DepartmentInputDialogComponent', () => {
  let component: DepartmentInputDialogComponent;
  let fixture: ComponentFixture<DepartmentInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
