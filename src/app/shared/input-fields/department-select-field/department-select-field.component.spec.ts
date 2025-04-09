import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSelectFieldComponent } from './department-select-field.component';

describe('DepartmentSelectFieldComponent', () => {
  let component: DepartmentSelectFieldComponent;
  let fixture: ComponentFixture<DepartmentSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
