import { TestBed } from '@angular/core/testing';

import { LibraryDialogService } from './library-dialog.service';

describe('LibraryDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryDialogService = TestBed.get(LibraryDialogService);
    expect(service).toBeTruthy();
  });
});
