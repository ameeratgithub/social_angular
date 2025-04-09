import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageAvatarComponent } from './profile-image-avatar.component';

describe('ProfileImageAvatarComponent', () => {
  let component: ProfileImageAvatarComponent;
  let fixture: ComponentFixture<ProfileImageAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImageAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
