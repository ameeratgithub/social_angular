import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSelectFieldComponent } from './program-select-field.component';

describe('ProgramSelectFieldComponent', () => {
  let component: ProgramSelectFieldComponent;
  let fixture: ComponentFixture<ProgramSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
