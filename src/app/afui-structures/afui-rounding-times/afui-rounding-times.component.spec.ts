import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfuiRoundingTimesComponent } from './afui-rounding-times.component';

describe('AfuiRoundingTimesComponent', () => {
  let component: AfuiRoundingTimesComponent;
  let fixture: ComponentFixture<AfuiRoundingTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfuiRoundingTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfuiRoundingTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
