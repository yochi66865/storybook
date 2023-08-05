import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfuiSeparationOfTimesComponent } from './afui-separation-of-times.component';
import { ControlValueService } from '../../shared/control-value-service/control-value.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AfuiStructuresModule } from '../afui-structures.module';

describe('AfuiSeparationOfTimesComponent', () => {
  let component: AfuiSeparationOfTimesComponent;
  let fixture: ComponentFixture<AfuiSeparationOfTimesComponent>;
  let spyWriteValue: jest.SpyInstance;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfuiSeparationOfTimesComponent],
      providers: [ControlValueService],
      imports: [AfuiStructuresModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfuiSeparationOfTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.separationOfTimes = {
      separationWindowTime: 5,
      typeSeparationOfTimes: 'אזורית',
      amountOfBuildingsAtTheSameTime: 4,
    };
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select type separation of times to מרחבית', () => {
    let typeSeparationOfTimes = 'מרחבית';
    // @ts-ignore
    component.selectTypeSeparationOfTimes({ value: typeSeparationOfTimes });

    expect(spyWriteValue).toHaveBeenCalledTimes(1);
    expect(spyWriteValue).toHaveBeenCalledWith({
      typeSeparationOfTimes,
      separationWindowTime: component.separationOfTimes.separationWindowTime,
      amountOfBuildingsAtTheSameTime: null,
    });
  });

  it('select type separation of times to אזורית', () => {
    let typeSeparationOfTimes = 'אזורית';
    // @ts-ignore
    component.selectTypeSeparationOfTimes({ value: typeSeparationOfTimes });

    expect(spyWriteValue).toHaveBeenCalledTimes(1);
    expect(spyWriteValue).toHaveBeenCalledWith({
      ...component.separationOfTimes,
      typeSeparationOfTimes,
    });
  });

  it('update separation window time', () => {
    let separationWindowTime = 15;
    // @ts-ignore
    component.updateSeparationWindowTime({ value: separationWindowTime });
  });

  it('update amount of buildings at the same time', () => {
    let amountOfBuildingsAtTheSameTime = 15;
    // @ts-ignore
    component.updateAmountOfBuildingsAtTheSameTime(
      amountOfBuildingsAtTheSameTime
    );
  });
});
