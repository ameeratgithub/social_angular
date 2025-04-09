import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotificationsSettingComponent } from './edit-notifications-setting.component';

describe('EditNotificationsSettingComponent', () => {
  let component: EditNotificationsSettingComponent;
  let fixture: ComponentFixture<EditNotificationsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNotificationsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotificationsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
