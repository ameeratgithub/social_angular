import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiPopoverComponent } from './emoji-popover.component';

describe('EmojiPopoverComponent', () => {
  let component: EmojiPopoverComponent;
  let fixture: ComponentFixture<EmojiPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
