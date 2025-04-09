import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContenteditableComponent } from './input-contenteditable.component';

describe('InputContenteditableComponent', () => {
  let component: InputContenteditableComponent;
  let fixture: ComponentFixture<InputContenteditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputContenteditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputContenteditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
