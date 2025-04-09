import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterSelectFieldComponent } from './semester-select-field.component';

describe('SemesterSelectFieldComponent', () => {
  let component: SemesterSelectFieldComponent;
  let fixture: ComponentFixture<SemesterSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
