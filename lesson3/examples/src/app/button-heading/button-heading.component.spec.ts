import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHeadingComponent } from './button-heading.component';

describe('ButtonHeadingComponent', () => {
  let component: ButtonHeadingComponent;
  let fixture: ComponentFixture<ButtonHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
