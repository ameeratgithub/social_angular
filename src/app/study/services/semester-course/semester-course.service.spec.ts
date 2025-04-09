import { TestBed } from '@angular/core/testing';

import { SemesterCourseService } from './semester-course.service';

describe('SemesterCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemesterCourseService = TestBed.get(SemesterCourseService);
    expect(service).toBeTruthy();
  });
});
