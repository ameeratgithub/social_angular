import { TestBed } from '@angular/core/testing';

import { TimingInputDialogService } from './timing-input-dialog.service';

describe('TimingInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimingInputDialogService = TestBed.get(TimingInputDialogService);
    expect(service).toBeTruthy();
  });
});
