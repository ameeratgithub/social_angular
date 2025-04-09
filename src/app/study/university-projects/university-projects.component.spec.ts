import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityProjectsComponent } from './university-projects.component';

describe('UniversityProjectsComponent', () => {
  let component: UniversityProjectsComponent;
  let fixture: ComponentFixture<UniversityProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
