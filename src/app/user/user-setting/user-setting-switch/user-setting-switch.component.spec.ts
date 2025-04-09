import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingSwitchComponent } from './user-setting-switch.component';

describe('UserSettingSwitchComponent', () => {
  let component: UserSettingSwitchComponent;
  let fixture: ComponentFixture<UserSettingSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
