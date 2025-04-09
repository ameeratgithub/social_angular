import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGroupDialogComponent } from './course-group-dialog.component';

describe('CourseGroupDialogComponent', () => {
  let component: CourseGroupDialogComponent;
  let fixture: ComponentFixture<CourseGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
