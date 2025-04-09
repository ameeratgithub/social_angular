import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionInputDialogComponent } from './session-input-dialog.component';

describe('SessionInputDialogComponent', () => {
  let component: SessionInputDialogComponent;
  let fixture: ComponentFixture<SessionInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
