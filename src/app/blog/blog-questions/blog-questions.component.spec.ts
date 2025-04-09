import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogQuestionsComponent } from './blog-questions.component';

describe('BlogQuestionsComponent', () => {
  let component: BlogQuestionsComponent;
  let fixture: ComponentFixture<BlogQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
