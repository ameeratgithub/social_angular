import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusWallHeaderComponent } from './campus-wall-header.component';

describe('CampusWallHeaderComponent', () => {
  let component: CampusWallHeaderComponent;
  let fixture: ComponentFixture<CampusWallHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusWallHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusWallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
