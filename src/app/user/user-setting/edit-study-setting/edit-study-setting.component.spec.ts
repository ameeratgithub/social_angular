import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudySettingComponent } from './edit-study-setting.component';

describe('EditStudySettingComponent', () => {
  let component: EditStudySettingComponent;
  let fixture: ComponentFixture<EditStudySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
