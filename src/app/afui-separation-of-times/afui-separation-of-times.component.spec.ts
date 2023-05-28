import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times.component';

describe('AfuiSeparationOfTimesComponent', () => {
  let component: AfuiSeparationOfTimesComponent;
  let fixture: ComponentFixture<AfuiSeparationOfTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfuiSeparationOfTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfuiSeparationOfTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
