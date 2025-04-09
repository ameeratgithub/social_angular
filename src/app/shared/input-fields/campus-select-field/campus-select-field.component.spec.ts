import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusSelectFieldComponent } from './campus-select-field.component';

describe('CampusSelectFieldComponent', () => {
  let component: CampusSelectFieldComponent;
  let fixture: ComponentFixture<CampusSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
