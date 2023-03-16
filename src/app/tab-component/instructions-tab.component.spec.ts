import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstructionsTabComponent } from './instructions-tab.component';

describe('TabComponentComponent', () => {
  let component: IstructionsTabComponent;
  let fixture: ComponentFixture<IstructionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IstructionsTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IstructionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
