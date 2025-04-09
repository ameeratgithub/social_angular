import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInputDialogComponent } from './course-input-dialog.component';

describe('CourseInputDialogComponent', () => {
  let component: CourseInputDialogComponent;
  let fixture: ComponentFixture<CourseInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
