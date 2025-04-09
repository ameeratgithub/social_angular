import { TestBed } from '@angular/core/testing';

import { CourseInputDialogService } from './course-input-dialog.service';

describe('CourseInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseInputDialogService = TestBed.get(CourseInputDialogService);
    expect(service).toBeTruthy();
  });
});
