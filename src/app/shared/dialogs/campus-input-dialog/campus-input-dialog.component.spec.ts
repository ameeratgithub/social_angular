import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusInputDialogComponent } from './campus-input-dialog.component';

describe('CampusInputDialogComponent', () => {
  let component: CampusInputDialogComponent;
  let fixture: ComponentFixture<CampusInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
