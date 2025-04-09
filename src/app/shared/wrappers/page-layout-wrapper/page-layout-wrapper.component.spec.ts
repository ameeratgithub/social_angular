import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutWrapperComponent } from './page-layout-wrapper.component';

describe('PageLayoutWrapperComponent', () => {
  let component: PageLayoutWrapperComponent;
  let fixture: ComponentFixture<PageLayoutWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
