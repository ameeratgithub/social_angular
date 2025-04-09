import { TestBed } from '@angular/core/testing';

import { CourseFilesDialogService } from './course-files-dialog.service';

describe('CourseFilesDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseFilesDialogService = TestBed.get(CourseFilesDialogService);
    expect(service).toBeTruthy();
  });
});
