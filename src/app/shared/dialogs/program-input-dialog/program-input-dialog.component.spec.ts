import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramInputDialogComponent } from './program-input-dialog.component';

describe('ProgramInputDialogComponent', () => {
  let component: ProgramInputDialogComponent;
  let fixture: ComponentFixture<ProgramInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
