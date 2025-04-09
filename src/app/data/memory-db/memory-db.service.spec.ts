import { TestBed } from '@angular/core/testing';

import { MemoryDbService } from './memory-db.service';

describe('MemoryDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryDbService = TestBed.get(MemoryDbService);
    expect(service).toBeTruthy();
  });
});
