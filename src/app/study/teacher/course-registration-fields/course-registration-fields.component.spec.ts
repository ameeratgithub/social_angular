import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationFieldsComponent } from './course-registration-fields.component';

describe('CourseRegistrationFieldsComponent', () => {
  let component: CourseRegistrationFieldsComponent;
  let fixture: ComponentFixture<CourseRegistrationFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRegistrationFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
