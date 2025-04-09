import { TestBed } from '@angular/core/testing';

import { CourseGroupService } from './course-group.service';

describe('CourseGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseGroupService = TestBed.get(CourseGroupService);
    expect(service).toBeTruthy();
  });
});
