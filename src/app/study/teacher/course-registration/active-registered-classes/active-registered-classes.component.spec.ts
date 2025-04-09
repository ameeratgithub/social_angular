import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRegisteredClassesComponent } from './active-registered-classes.component';

describe('ActiveRegisteredClassesComponent', () => {
  let component: ActiveRegisteredClassesComponent;
  let fixture: ComponentFixture<ActiveRegisteredClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRegisteredClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRegisteredClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
