import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreQuestionsComponent } from './explore-questions.component';

describe('ExploreQuestionsComponent', () => {
  let component: ExploreQuestionsComponent;
  let fixture: ComponentFixture<ExploreQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
