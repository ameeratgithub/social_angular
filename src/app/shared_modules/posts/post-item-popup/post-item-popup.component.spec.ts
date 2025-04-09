import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemPopupComponent } from './post-item-popup.component';

describe('PostItemPopupComponent', () => {
  let component: PostItemPopupComponent;
  let fixture: ComponentFixture<PostItemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItemPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
