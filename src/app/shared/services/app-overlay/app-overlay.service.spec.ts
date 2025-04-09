import { TestBed } from '@angular/core/testing';

import { AppOverlayService } from './app-overlay.service';

describe('AppOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppOverlayService = TestBed.get(AppOverlayService);
    expect(service).toBeTruthy();
  });
});
