import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUniversitiesComponent } from './search-universities.component';

describe('SearchUniversitiesComponent', () => {
  let component: SearchUniversitiesComponent;
  let fixture: ComponentFixture<SearchUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
