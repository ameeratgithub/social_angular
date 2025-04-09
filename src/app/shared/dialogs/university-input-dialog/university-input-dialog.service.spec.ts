import { TestBed } from '@angular/core/testing';

import { UniversityInputDialogService } from './university-input-dialog.service';

describe('UniversityInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversityInputDialogService = TestBed.get(UniversityInputDialogService);
    expect(service).toBeTruthy();
  });
});
