import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGalleryPopupComponent } from './media-gallery-popup.component';

describe('MediaGalleryPopupComponent', () => {
  let component: MediaGalleryPopupComponent;
  let fixture: ComponentFixture<MediaGalleryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaGalleryPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaGalleryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
