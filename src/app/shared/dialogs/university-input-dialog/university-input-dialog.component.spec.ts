import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInputDialogComponent } from './university-input-dialog.component';

describe('UniversityInputDialogComponent', () => {
  let component: UniversityInputDialogComponent;
  let fixture: ComponentFixture<UniversityInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
