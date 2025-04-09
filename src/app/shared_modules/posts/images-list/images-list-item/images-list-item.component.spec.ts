import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesListItemComponent } from './images-list-item.component';

describe('ImagesListItemComponent', () => {
  let component: ImagesListItemComponent;
  let fixture: ComponentFixture<ImagesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
