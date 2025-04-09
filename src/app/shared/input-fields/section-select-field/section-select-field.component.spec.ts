import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectFieldComponent } from './section-select-field.component';

describe('SectionSelectFieldComponent', () => {
  let component: SectionSelectFieldComponent;
  let fixture: ComponentFixture<SectionSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
