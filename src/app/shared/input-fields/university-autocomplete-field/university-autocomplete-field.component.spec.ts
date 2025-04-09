import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAutocompleteFieldComponent } from './university-autocomplete-field.component';

describe('UniversityAutocompleteFieldComponent', () => {
  let component: UniversityAutocompleteFieldComponent;
  let fixture: ComponentFixture<UniversityAutocompleteFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAutocompleteFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAutocompleteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
