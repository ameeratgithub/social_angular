import { TestBed } from '@angular/core/testing';

import { SectionInputDialogService } from './section-input-dialog.service';

describe('SectionInputDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionInputDialogService = TestBed.get(SectionInputDialogService);
    expect(service).toBeTruthy();
  });
});
