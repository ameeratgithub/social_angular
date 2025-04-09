import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGroupItemComponent } from './course-group-item.component';

describe('CourseGroupItemComponent', () => {
  let component: CourseGroupItemComponent;
  let fixture: ComponentFixture<CourseGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
