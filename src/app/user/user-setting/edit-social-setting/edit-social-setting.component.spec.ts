import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialSettingComponent } from './edit-social-setting.component';

describe('EditSocialSettingComponent', () => {
  let component: EditSocialSettingComponent;
  let fixture: ComponentFixture<EditSocialSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSocialSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSocialSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
