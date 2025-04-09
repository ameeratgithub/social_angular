import { TestBed } from '@angular/core/testing';

import { SessionInputDialogService } from './session-input-dialog.service';

describe('SessionInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionInputDialogService = TestBed.get(SessionInputDialogService);
    expect(service).toBeTruthy();
  });
});
