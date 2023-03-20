import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfuiSelectAlternativeComponent } from './afui-select-alternative.component';

describe('AfuiSelectAlternativeComponent', () => {
  let component: AfuiSelectAlternativeComponent;
  let fixture: ComponentFixture<AfuiSelectAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfuiSelectAlternativeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfuiSelectAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
