import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfuiStructuresComponent } from './afui-structures.component';

describe('AfuiStructuresComponent', () => {
  let component: AfuiStructuresComponent;
  let fixture: ComponentFixture<AfuiStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfuiStructuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfuiStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
