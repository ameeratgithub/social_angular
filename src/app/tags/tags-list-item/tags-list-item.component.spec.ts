import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsListItemComponent } from './tags-list-item.component';

describe('TagsListItemComponent', () => {
  let component: TagsListItemComponent;
  let fixture: ComponentFixture<TagsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
