import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogSettingComponent } from './edit-blog-setting.component';

describe('EditBlogSettingComponent', () => {
  let component: EditBlogSettingComponent;
  let fixture: ComponentFixture<EditBlogSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlogSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
