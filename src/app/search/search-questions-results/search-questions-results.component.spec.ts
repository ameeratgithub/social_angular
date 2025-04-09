import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuestionsResultsComponent } from './search-questions-results.component';

describe('SearchQuestionsResultsComponent', () => {
  let component: SearchQuestionsResultsComponent;
  let fixture: ComponentFixture<SearchQuestionsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQuestionsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuestionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
