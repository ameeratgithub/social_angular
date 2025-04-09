import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilesDialogComponent } from './course-files-dialog.component';

describe('CourseFilesDialogComponent', () => {
  let component: CourseFilesDialogComponent;
  let fixture: ComponentFixture<CourseFilesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFilesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFilesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
