import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSelectFieldComponent } from './course-select-field.component';

describe('CourseSelectFieldComponent', () => {
  let component: CourseSelectFieldComponent;
  let fixture: ComponentFixture<CourseSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
