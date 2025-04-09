import { TestBed } from '@angular/core/testing';

import { DepartmentInputDialogService } from './department-input-dialog.service';

describe('DepartmentInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentInputDialogService = TestBed.get(DepartmentInputDialogService);
    expect(service).toBeTruthy();
  });
});
