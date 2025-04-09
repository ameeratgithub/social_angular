import { TestBed } from '@angular/core/testing';

import { UsersListDialogService } from './users-list-dialog.service';

describe('UsersListDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersListDialogService = TestBed.get(UsersListDialogService);
    expect(service).toBeTruthy();
  });
});
