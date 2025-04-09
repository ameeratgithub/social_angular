import { TestBed } from '@angular/core/testing';

import { CampusInputDialogService } from './campus-input-dialog.service';

describe('CampusInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampusInputDialogService = TestBed.get(CampusInputDialogService);
    expect(service).toBeTruthy();
  });
});
