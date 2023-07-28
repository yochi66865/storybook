import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { AfuiSeparationOfTimes } from '@models/afui-separation-of-times.model';
import { KeyValue } from '@angular/common';
import { MatSelectChange } from '@angular/material/select';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueService } from '@shared/control-value-service/control-value.service';
import { initialSeparationOfTimes } from '../util';

@Component({
  selector: 'separation-of-times',
  templateUrl: './afui-separation-of-times.component.html',
  styleUrls: ['./afui-separation-of-times.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AfuiSeparationOfTimesComponent),
      multi: true,
    },
  ],
})
export class AfuiSeparationOfTimesComponent
  extends ControlValueService
  implements OnInit, OnChanges
{
  @Input() separationOfTimes!: AfuiSeparationOfTimes;
  cloneSeparationOfTimes: AfuiSeparationOfTimes = {
    ...initialSeparationOfTimes,
  };
  timesSeparationOfTimes: Record<number, string> = {
    5: '5 דקות',
    10: '10 דקות',
    15: '15 דקות',
    20: '20 דקות',
    25: '25 דקות',
  };

  ngOnChanges(changes: SimpleChanges) {
    this.cloneSeparationOfTimes = this.cloneDeepSeparationOfTimesInput();
  }

  ngOnInit(): void {}

  keyDescOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  };

  selectTypeSeparationOfTimes({ value }: MatSelectChange) {
    this.cloneSeparationOfTimes.typeSeparationOfTimes = value;
    if (value === 'מרחבית') {
      this.cloneSeparationOfTimes.amountOfBuildingsAtTheSameTime = null;
    }
    this.writeValue(this.cloneSeparationOfTimes);
  }

  updateSeparationWindowTime({ value }: MatSelectChange) {
    this.cloneSeparationOfTimes.separationWindowTime = value;
    this.writeValue(this.cloneSeparationOfTimes);
  }

  updateAmountOfBuildingsAtTheSameTime(value: number) {
    this.cloneSeparationOfTimes.amountOfBuildingsAtTheSameTime = value;
    this.writeValue(this.cloneSeparationOfTimes);
  }

  cloneDeepSeparationOfTimesInput() {
    return {
      typeSeparationOfTimes:
        this.separationOfTimes?.typeSeparationOfTimes ??
        this.cloneSeparationOfTimes.typeSeparationOfTimes,
        separationWindowTime:
        this.separationOfTimes?.separationWindowTime ??
        this.cloneSeparationOfTimes.separationWindowTime,
        amountOfBuildingsAtTheSameTime:
        this.separationOfTimes?.amountOfBuildingsAtTheSameTime ??
        this.cloneSeparationOfTimes.amountOfBuildingsAtTheSameTime,
    };
  }
}
