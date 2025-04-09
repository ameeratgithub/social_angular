import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementAddDialogComponent } from './announcement-add-dialog.component';

describe('AnnouncementAddDialogComponent', () => {
  let component: AnnouncementAddDialogComponent;
  let fixture: ComponentFixture<AnnouncementAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
