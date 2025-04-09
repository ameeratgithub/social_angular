import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSelectFieldComponent } from './session-select-field.component';

describe('SessionSelectFieldComponent', () => {
  let component: SessionSelectFieldComponent;
  let fixture: ComponentFixture<SessionSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
