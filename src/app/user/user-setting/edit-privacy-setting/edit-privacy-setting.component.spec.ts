import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrivacySettingComponent } from './edit-privacy-setting.component';

describe('EditPrivacySettingComponent', () => {
  let component: EditPrivacySettingComponent;
  let fixture: ComponentFixture<EditPrivacySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrivacySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrivacySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
