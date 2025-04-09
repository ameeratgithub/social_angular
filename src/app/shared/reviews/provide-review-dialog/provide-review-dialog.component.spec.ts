import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProivdeReviewDialogComponent } from './proivde-review-dialog.component';

describe('ProivdeReviewDialogComponent', () => {
  let component: ProivdeReviewDialogComponent;
  let fixture: ComponentFixture<ProivdeReviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProivdeReviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProivdeReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
