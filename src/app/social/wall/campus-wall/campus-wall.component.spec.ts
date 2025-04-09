import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusWallComponent } from './campus-wall.component';

describe('CampusWallComponent', () => {
  let component: CampusWallComponent;
  let fixture: ComponentFixture<CampusWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
