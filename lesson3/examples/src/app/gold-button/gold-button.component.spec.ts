import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldButtonComponent } from './gold-button.component';

describe('GoldButtonComponent', () => {
  let component: GoldButtonComponent;
  let fixture: ComponentFixture<GoldButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
