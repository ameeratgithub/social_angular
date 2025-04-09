import { TestBed } from '@angular/core/testing';

import { AnnouncementDialogService } from './announcement-dialog.service';

describe('AnnouncementDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnouncementDialogService = TestBed.get(AnnouncementDialogService);
    expect(service).toBeTruthy();
  });
});
