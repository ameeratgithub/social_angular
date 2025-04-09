import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSelectionListComponent } from './users-selection-list.component';

describe('UsersSelectionListComponent', () => {
  let component: UsersSelectionListComponent;
  let fixture: ComponentFixture<UsersSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
