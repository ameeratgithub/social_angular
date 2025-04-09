import { TestBed } from '@angular/core/testing';

import { CampuseService } from './campus.service';

describe('CampuseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampuseService = TestBed.get(CampuseService);
    expect(service).toBeTruthy();
  });
});
