import { TestBed } from '@angular/core/testing';

import { SemesterInputDialogService } from './semester-input-dialog.service';

describe('SemesterInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemesterInputDialogService = TestBed.get(SemesterInputDialogService);
    expect(service).toBeTruthy();
  });
});
