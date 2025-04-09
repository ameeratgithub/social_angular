import { TestBed } from '@angular/core/testing';

import { MediaThumbnailService } from './media-thumbnail.service';

describe('MediaThumbnailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaThumbnailService = TestBed.get(MediaThumbnailService);
    expect(service).toBeTruthy();
  });
});
