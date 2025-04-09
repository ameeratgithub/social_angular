import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionWrapperComponent } from './edit-section-wrapper.component';

describe('EditSectionWrapperComponent', () => {
  let component: EditSectionWrapperComponent;
  let fixture: ComponentFixture<EditSectionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSectionWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
