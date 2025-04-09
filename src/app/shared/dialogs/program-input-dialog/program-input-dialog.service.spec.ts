import { TestBed } from '@angular/core/testing';

import { ProgramInputDialogService } from './program-input-dialog.service';

describe('ProgramInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramInputDialogService = TestBed.get(ProgramInputDialogService);
    expect(service).toBeTruthy();
  });
});
