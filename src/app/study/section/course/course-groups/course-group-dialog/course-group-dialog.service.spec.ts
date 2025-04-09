import { TestBed } from '@angular/core/testing';

import { CourseGroupDialogService } from './course-group-dialog.service';

describe('CourseGroupDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseGroupDialogService = TestBed.get(CourseGroupDialogService);
    expect(service).toBeTruthy();
  });
});
