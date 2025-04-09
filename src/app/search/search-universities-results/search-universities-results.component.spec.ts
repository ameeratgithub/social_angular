import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUniversitiesResultsComponent } from './search-universities-results.component';

describe('SearchUniversitiesResultsComponent', () => {
  let component: SearchUniversitiesResultsComponent;
  let fixture: ComponentFixture<SearchUniversitiesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUniversitiesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUniversitiesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
