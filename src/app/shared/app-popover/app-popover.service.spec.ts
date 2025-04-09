import { TestBed } from '@angular/core/testing';

import { AppPopoverService } from './app-popover.service';

describe('AppPopoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPopoverService = TestBed.get(AppPopoverService);
    expect(service).toBeTruthy();
  });
});
