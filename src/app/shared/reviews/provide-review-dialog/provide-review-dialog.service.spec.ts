import { TestBed } from '@angular/core/testing';

import { ProvideReviewDialogService } from './provide-review-dialog.service';

describe('ProvideReviewDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvideReviewDialogService = TestBed.get(ProvideReviewDialogService);
    expect(service).toBeTruthy();
  });
});
