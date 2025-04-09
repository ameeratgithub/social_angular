import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTagsComponent } from './app-tags.component';

describe('AppTagsComponent', () => {
  let component: AppTagsComponent;
  let fixture: ComponentFixture<AppTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
