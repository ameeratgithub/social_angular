import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInputDialogComponent } from './section-input-dialog.component';

describe('SectionInputDialogComponent', () => {
  let component: SectionInputDialogComponent;
  let fixture: ComponentFixture<SectionInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
